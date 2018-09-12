import commentsReducer from '../commentsReducer';
import { SAVE_COMMENT } from '../../actions/types';

it('handles actions of type SAVE_COMMENT', () => {
  const initialState = [];
  const action = {
    type: SAVE_COMMENT,
    payload: 'New Comment'
  };

  const newState = commentsReducer(initialState, action);

  expect(newState).toEqual(['New Comment']);
});

it('handles action with unknown type', () => {
  const newState = commentsReducer([], { type: 'UNKNOWN!' });

  expect(newState).toEqual([]);
});
