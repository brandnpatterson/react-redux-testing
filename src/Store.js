import React from 'react';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

// store
import reducers from './reducers';

const initialState = {};
const middleware = [thunk];

let store;

if (process.env.NODE_ENV === 'development') {
  store = createStore(
    reducers,
    initialState,
    compose(
      applyMiddleware(...middleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
} else if (process.env.NODE_ENV === 'production') {
  store = createStore(
    reducers,
    initialState,
    compose(applyMiddleware(...middleware))
  );
}

const Store = props => {
  return <Provider store={store}>{props.children}</Provider>;
};

export default Store;
