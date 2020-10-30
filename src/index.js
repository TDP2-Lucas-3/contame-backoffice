import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import {ContameRouter} from './routing/ContameRouter';
import {createBrowserHistory} from 'history';
import {signIn} from './services/authentication';
import store from './redux/store';
import {login} from './redux/auth';

// Tmp hack to handle auth without a login screen
(async () => {
  const loginInfo = await signIn();
  store.dispatch(login(loginInfo.data.token));
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
