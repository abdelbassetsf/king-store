import { useState } from 'react';

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth
} from '../../utils/firebase/firebase.utils';

import Button from '../button/button.component';
import FormInput from '../form-input/form-input.component';

import './sign-up-form.styles.scss';

const SignUpForm = () => {
  const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => setFormFields(defaultFormFields);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('The passwords do not match');
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (e) {
      if (e.code === 'auth/email-already-in-use') {
        alert('cannot create user, email already in use');
      } else {
        console.log(e);
      }
    }
  };

  return (
    <div className='sign-up-container'>
      <h2>Don't have an account?</h2>
      <span>Sign Up With Your Email and Password</span>
      <form onSubmit={handleSubmit} action='#'>
        <FormInput
          htmlFor='displayName'
          label='Dsiplay Name'
          onChange={handleChange}
          type='text'
          id='displayName'
          required
          name='displayName'
          value={displayName}
        />

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
          id='password'
          onChange={handleChange}
          type='password'
          required
          name='password'
          value={password}
          minlength='6'
        />
        <FormInput
          label='Confirm Password'
          htmlFor='confirmPassword'
          id='confirmPassword'
          onChange={handleChange}
          type='password'
          required
          name='confirmPassword'
          value={confirmPassword}
          minlength='6'
        />
        <Button type='submit'>Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
