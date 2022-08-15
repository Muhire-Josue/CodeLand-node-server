import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import apiMiddleware from 'src/middlewares/apiMiddleware';
import rootReducer from 'src/store/reducers';
import initialState from 'src/store/initialState';

const middleware = [apiMiddleware];

const store = createStore(
  combineReducers(rootReducer),
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
