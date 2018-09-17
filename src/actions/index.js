import { AUTHENTICATED, FETCH_COMMENTS, SAVE_COMMENT } from './types';
import axios from 'axios';

export const fetchComments = () => {
  const response = axios.get('http://jsonplaceholder.typicode.com/comments');

  return {
    type: FETCH_COMMENTS,
    payload: response
  };
};

export const saveComment = comment => {
  return {
    type: SAVE_COMMENT,
    payload: comment
  };
};

export const changeAuth = isLoggedIn => {
  return {
    type: AUTHENTICATED,
    payload: isLoggedIn
  };
};
