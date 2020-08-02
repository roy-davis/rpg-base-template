import { combineReducers } from 'redux';
import NetworkReducer from './networkReducer';

export const rootReducer = combineReducers({
  network: NetworkReducer,
});


export type AppState = ReturnType<typeof rootReducer>;