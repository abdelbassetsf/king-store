import { useState, useContext } from 'react';

import {
  signInWithPopupGoogle,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword
} from '../../utils/firebase/firebase.utils';

import Button from '../button/button.component';
import FormInput from '../form-input/form-input.component';

import { UserContext } from '../../contexts/user.context';

import './sign-in-form.styles.scss';

const defaultFormFields = {
  email: '',
  password: ''
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const { setCurrentUser } = useContext(UserContext);

  const resetFormFields = () => setFormFields(defaultFormFields);

  const signInWithGoogle = async () => {
    const { user } = await signInWithPopupGoogle();
    await createUserDocumentFromAuth(user);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      setCurrentUser(user);
      resetFormFields();
    } catch (e) {
      switch (e.code) {
        case 'auth/wrong-password':
          alert('Incorrect Password for this email');
          break;
        case 'auth/user-not-found':
          alert('No user assiosiated with this email');
          break;
        case 'auth/too-many-requests':
          alert('You have tried to sign in many times, try again later');
          break;
        default:
          console.log(e);
      }
    }
  };

  return (
    <div className='sign-up-container'>
      <h2>Already have an account?</h2>
      <span>Sign In With Your Email and Password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          htmlFor='email'
          onChange={handleChange}
          type='email'
          id='email'
          required
          name='email'
          value={email}
        />
        <FormInput
          label='Password'
          htmlFor='password'
          onChange={handleChange}
          type='password'
          required
          name='password'
          value={password}
        />
        <div className='buttons-container'>
          <Button type='submit'>Sign In</Button>
          <Button type='button' onClick={signInWithGoogle} buttonType='google'>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
