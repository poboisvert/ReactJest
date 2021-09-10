import commentReducer from 'reducers/comment';
import { SAVE_COMMENT } from 'actions/types';

test('payload and type SAVE_COMMENT', () => {
  const action = {
    type: SAVE_COMMENT,
    payload: 'Testing new Comment',
  };

  const newState = commentReducer([], action);

  expect(newState).toEqual(['Testing new Comment']);
});

test('With unknown type payload', () => {
  const newState = commentReducer([], { type: 'tttttt' });

  expect(newState).toEqual([]);
});
