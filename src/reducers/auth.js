import { AUTHENTICATED } from '../actions/types';

const initialState = false;

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATED:
      return action.payload;
    default:
      return state;
  }
};
