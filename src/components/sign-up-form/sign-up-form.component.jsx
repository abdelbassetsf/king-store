import { useState } from 'react';

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

  console.log(formFields);
  const handleChange = e => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className='sign-up-container'>
      <h2>Don't have an account?</h2>
      <span>Sign Up With Your Email and Password</span>
      <form onSubmit={() => ''} action='#'>
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
        />
        <Button type='submit' buttonType='google'>
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignUpForm;
