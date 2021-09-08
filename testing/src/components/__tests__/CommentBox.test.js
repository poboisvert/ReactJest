import React from 'react';
import CommentBox from 'components/CommentBox';
import { mount } from 'enzyme';

let wrapped;

beforeEach(() => {
  wrapped = mount(<CommentBox />);
});

afterEach(() => {
  wrapped.unmount();
});

test('Has textarea and a button', () => {
  console.log(wrapped.find('textarea').length);
  console.log(wrapped.find('button').length);

  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(1);
});

test('textarea has text and can be edited', () => {
  wrapped.find('textarea').simulate('change', {
    target: { value: 'new test comment' },
  });

  wrapped.update();

  expect(wrapped.find('textarea').prop('value')).toEqual('new test comment');
});

test('form submit and textarea is empty', () => {
  wrapped.find('textarea').simulate('change', {
    target: { value: 'new test comment' },
  });

  wrapped.update();

  wrapped.find('form').simulate('submit');

  wrapped.update();

  expect(wrapped.find('textarea').prop('value')).toEqual('');
});
