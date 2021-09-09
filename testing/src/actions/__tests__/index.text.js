import { saveComment } from 'actions';
import { SAVE_COMMENT } from 'actions/types';

describe('SaveComment', () => {
  test('Correct type', () => {
    const action = saveComment(); // payload empty

    expect(action.type).toEqual(SAVE_COMMENT);
  });
  //
  test('Correct payload', () => {
    const action = saveComment('2');

    expect(action.payload).toEqual('2');
  });
});
