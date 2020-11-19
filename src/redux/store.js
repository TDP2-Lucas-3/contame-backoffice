import {createStore} from 'redux';
import storage from 'redux-persist/lib/storage';

import rootReducer from './rootReducer';
import {persistReducer, persistStore} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

let store = createStore(persistedReducer);
let persistor = persistStore(store);
export {store, persistor};
