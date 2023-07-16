// import {createStore, applyMiddleware} from 'redux';
// import {createLogger} from 'redux-logger';
// import {persistStore, persistReducer} from 'redux-persist';
// import logger from 'redux-logger';
// import createSagaMiddleware from 'redux-saga';
// import rootReducer from '../reducers';
// import rootSaga from '../saga';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const sagaMiddleware = createSagaMiddleware();

// const middlewareList = [sagaMiddleware];

// if (process.env.NODE_ENV === 'development') {
//   middlewareList.push(logger);
// }

// const persistConfig = {
//   key: 'root',
//   storage: AsyncStorage,
//   whitelist: ['bookmark'],
//   //blacklist: ['counterReducer'],
//   //timeout: null,
// };

// // Middleware: Redux Persist Persisted Reducer
// const persistedReducer = persistReducer(persistConfig, rootReducer);
// // Redux: Store
// const store = createStore(
//   persistedReducer,
//   applyMiddleware(createLogger(), ...middlewareList),
// );
// // Middleware: Redux Persist Persister
// sagaMiddleware.run(rootSaga);
// let persistor = persistStore(store);
// // Exports
// export default {store, persistor};

import AsyncStorage from '@react-native-community/async-storage';
import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import {persistStore, persistReducer} from 'redux-persist';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../saga';

const sagaMiddleware = createSagaMiddleware();

const middlewareList = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  middlewareList.push(logger);
}

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['bookmark'],
  blacklist: ['counterReducer'],
  timeout: null,
};

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);
// Redux: Store
const store = createStore(
  persistedReducer,
  applyMiddleware(createLogger(), ...middlewareList),
);
// Middleware: Redux Persist Persister
sagaMiddleware.run(rootSaga);
let persistor = persistStore(store);
// Exports
export default {store, persistor};
