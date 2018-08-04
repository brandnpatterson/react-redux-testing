import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import CommentBox from '../components/CommentBox';

it('shows the comment box', () => {
  const wrapped = shallow(<App />);

  expect(wrapped.find(CommentBox).length).toEqual(1);
});
