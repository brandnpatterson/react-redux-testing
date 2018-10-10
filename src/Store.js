import React from 'react';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import async from './middlewares/async';
import stateValidator from './middlewares/stateValidator';
import reducers from './reducers';

const middleware = [async, stateValidator];

const Store = ({ children, initialState = {} }) => {
  const store = createStore(
    reducers,
    initialState,
    process.env.NODE_ENV === 'development'
      ? compose(
          applyMiddleware(...middleware),
          window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
        )
      : compose(applyMiddleware(...middleware))
  );

  return <Provider store={store}>{children}</Provider>;
};

export default Store;
