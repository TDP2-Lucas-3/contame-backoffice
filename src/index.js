import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createStore} from 'redux';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import {ContameRouter} from './routing/ContameRouter';
import {createBrowserHistory} from 'history';
import {signIn} from './services/authentication';

const store = createStore(() => {});

export let token = null;

(async () => {
  const loginInfo = await signIn();
  token = loginInfo.data.token;
})();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={createBrowserHistory()}>
        <ContameRouter />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
