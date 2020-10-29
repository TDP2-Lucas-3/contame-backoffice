export const loginStatus = {
  LOGGED: 0,
  NOT_LOGGED: 1,
};

const initialAuth = {
  status: loginStatus.NOT_LOGGED,
  user: null,
  token: null,
};

const LOG_IN = 'LOG_IN';
const LOG_OUT = 'LOG_OUT';

const exampleUser = {name: 'Test User'};

export function auth(initial = initialAuth, action) {
  switch (action.type) {
    case LOG_IN: {
      return {status: loginStatus.LOGGED, token: action.token};
    }
    case LOG_OUT: {
      return initialAuth;
    }
    default:
      return initial;
  }
}

export function login(token) {
  return {
    type: LOG_IN,
    token,
  };
}

export function logOut() {
  return {
    type: LOG_OUT,
    user: exampleUser,
  };
}
