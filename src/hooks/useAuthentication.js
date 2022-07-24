import { useState } from 'react';

//firebase import
import { auth } from '../firebase/config';
import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
} from 'firebase/auth';

export const useAuthentication = () => {
  const [error, setError] = useState(null);

  const signup = (email, password) => {
    setError(null);
    createUserWithEmailAndPassword(auth, email, password)
      .then((response) => {
        console.log('new user created', response.user);
      })
      .catch((err) => setError(err.message));
  };

  const signin = async (email, password) => {
    setError(null);
    await signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res.user);
      })
      .catch((err) => {
        setError(err.message);
        console.log(error);
      });
  };

  const signout = () => {
    setError(null);
    signOut(auth)
      .then(() => console.log('User Signed Out'))
      .catch((err) => {
        setError(err.message);
        console.log(error);
      });
  };

  return { error, signup, signout, signin };
};
