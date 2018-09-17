import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import Store from '../Store';
import App from '../App';

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Store>
      <App />
    </Store>
  );

  moxios.install();
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [
      { name: 'test 1' },
      { name: 'test 2' },
      { name: 'test 3' },
      { name: 'test 4' }
    ]
  });
});

afterEach(() => {
  moxios.uninstall();
});

it('can fetch a list of comments and display them', done => {
  wrapped.find('.fetch-comments').simulate('click');

  moxios.wait(() => {
    wrapped.update();

    expect(wrapped.find('li').length).toEqual(4);

    done();
    wrapped.unmount();
  });
});
