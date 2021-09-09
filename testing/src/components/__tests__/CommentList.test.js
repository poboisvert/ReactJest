import React from 'react';
import { mount } from 'enzyme';

import CommentList from 'components/CommentList';
import Root from 'Root';

let wrapped;

beforeEach(() => {
  const initialState = {
    comments: ['Comment 1', 'Comment 2'],
  };
  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});

// Fetch the data to redux store to render the commentlist && initialState to simulate the redux state

it('it creates one LI per comment', () => {
  // console.log('wrapped.find("li").length', wrapped.find("li").length);
  expect(wrapped.find('li').length).toEqual(2);
});

// a text is shown inside each li
it('shows the text for each comment', () => {
  expect(wrapped.render().text()).toContain('Comment 1');
  expect(wrapped.render().text()).toContain('Comment 2');
});
