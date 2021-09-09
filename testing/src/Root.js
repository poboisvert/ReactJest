import React from 'react';
import { Provider } from 'react-redux';
import reduxPromise from 'redux-promise';
import reducers from 'reducers';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const Root = ({ initialState = {}, children }) => {
  const middleware = [reduxPromise];

  const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  );
  return <Provider store={store}>{children}</Provider>;
};
export default Root;
