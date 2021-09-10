import { FETCH_COMMENTS, SAVE_COMMENT } from 'actions/types';

// state = [] - See Redux Dev Tools in Google Chrome
export default function (state = [], action) {
  switch (action.type) {
    case SAVE_COMMENT:
      // save the comment received from the action creator payload to existing state
      return [action.payload, ...state]; // Will add at the top before dummy data
    case FETCH_COMMENTS:
      const comments = action.payload.data.map((comment) => comment.name);
      // ... means we keep all previous data
      return [...state, ...comments];
    default: {
      return state;
    }
  }
}
