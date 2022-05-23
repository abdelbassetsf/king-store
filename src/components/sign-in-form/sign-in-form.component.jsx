import { useState, useContext } from 'react';

import {
  signInWithPopupGoogle,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword
} from '../../utils/firebase/firebase.utils';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import FormInput from '../form-input/form-input.component';

import { UserContext } from '../../contexts/user.context';

import { ButtonsContainer, SignInContainer } from './sign-in-form.styles.jsx';

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
    <SignInContainer>
      <h2>Already have an account?</h2>
      <span>Sign In With Your Email and Password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          htmlFor='email'
          onChange={handleChange}
          type='email'
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
        <ButtonsContainer>
          <Button type='submit'>Sign In</Button>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.google}
            type='button'
            onClick={signInWithGoogle}>
            Google Sign In
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
