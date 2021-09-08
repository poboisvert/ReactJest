import React from 'react';
//import ReactDOM from 'react-dom';
import App from 'components/App';
import { shallow } from 'enzyme';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

test('Shows the component CommentBox', () => {
  /* const div = document.createElement('div');

  ReactDOM.render(<App />, div);

  console.log(div.innerHTML);

  // Bad Example for a test
  // expect(div.innerHTML).toContain('Comment Box');
  expect(div.innerHTML).toContain('Comment Box');

  ReactDOM.unmountComponentAtNode(div); */

  const wrapped = shallow(<App />);

  // Try to break the test to see what make it pass

  expect(wrapped.find(CommentBox).length).toEqual(1);
});

test('Shows the component CommentList', () => {
  /* const div = document.createElement('div');

  ReactDOM.render(<App />, div);

  console.log(div.innerHTML);

  // Bad Example for a test
  // expect(div.innerHTML).toContain('Comment Box');
  expect(div.innerHTML).toContain('Comment Box');

  ReactDOM.unmountComponentAtNode(div); */

  const wrapped = shallow(<App />);

  // Try to break the test to see what make it pass

  expect(wrapped.find(CommentList).length).toEqual(1);
});
