import { createContext, useEffect, useReducer } from 'react';

import { createAction } from '../utils/reducer/reducer.utils';

import { onAuthStateChangedListener } from '../utils/firebase/firebase.utils';
import USER_ACTION_TYPES from '../store/user/user.types';

export const UserContext = createContext({
  user: null,
  setCurrentUser: () => null
});

const userReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload
      };
    default:
      throw new Error(`Unhandled ${type} action type in userReducer `);
  }
};

const INITIAL_STATE = {
  currentUser: null
};

export const UserProvider = ({ children }) => {
  const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);

  const setCurrentUser = user =>
    dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));

  const value = { currentUser, setCurrentUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
