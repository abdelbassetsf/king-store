import {
  signInWithPopupGoogle,
  createUserDocumentFromAuth
} from '../../utils/firebase/firebase.utils';

import './sign-in.styles.scss';

const SignIn = () => {
  const logGooleUser = async () => {
    const { user } = await signInWithPopupGoogle();
    createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In To king Store</h1>
      <button onClick={logGooleUser}>Sign In With Goolgle</button>
    </div>
  );
};

export default SignIn;
