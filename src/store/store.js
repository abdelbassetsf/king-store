import { compose, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import { rootReducer } from './root-reducer';

const loggerMiddleware = store => next => action => {
  if (!action.type) {
    return next(action);
  }

  console.log('TYPE: ', action.type);
  console.log('PAYLOAD: ', action.payload);
  console.log('CURRENT_STATE: ', store.getState());

  next(action);

  console.log('NEXT_STATE: ', store.getState());
};

const middlewares = [loggerMiddleware];

const composedEnhancers = compose(applyMiddleware(...middlewares));

export const store = createStore(rootReducer, undefined, composedEnhancers);
