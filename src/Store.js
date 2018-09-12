import React from 'react';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducers from './reducers';

const initialState = {};
const middleware = [thunk];
const devEnv = process.env.NODE_ENV === 'development';

const store = createStore(
  reducers,
  initialState,
  devEnv
    ? compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
      )
    : compose(applyMiddleware(...middleware))
);

const Store = props => {
  return <Provider store={store}>{props.children}</Provider>;
};

export default Store;
