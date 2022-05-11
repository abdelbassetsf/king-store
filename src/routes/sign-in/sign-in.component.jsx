import { useEffect } from 'react';

import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import {
  auth,
  signInWithPopupGoogle,
  createUserDocumentFromAuth
} from '../../utils/firebase/firebase.utils';

import './sign-in.styles.scss';

const SignIn = () => {
  const logGooleUser = async () => {
    const { user } = await signInWithPopupGoogle();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In To king Store</h1>
      <button onClick={logGooleUser}>Sign In With Goolgle</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
