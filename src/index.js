import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import thunkMiddleware from 'redux-thunk';
import App from './containers/App';
import './index.css';
import 'tachyons';
import registerServiceWorker from './registerServiceWorker';
import { searchRobots, requestRobots } from './reducers';

const rootReducer = combineReducers({
  searchRobots,
  requestRobots
});
const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
