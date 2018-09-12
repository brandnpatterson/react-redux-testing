import React from 'react';
import { Provider } from 'react-redux';

// store
import { createStore } from 'redux';
import reducers from './reducers';

const initialState = {};
const store = createStore(reducers, initialState);

const Store = props => {
  return <Provider store={store}>{props.children}</Provider>;
};

export default Store;
