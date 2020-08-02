import { createStore } from 'redux'
import { rootReducer } from '../Reducers/'
import { devToolsEnhancer } from 'redux-devtools-extension'

//import { rootReducer } from './Reducers';
//import thunk from 'redux-thunk';
//const store = createStore(rootReducer, applyMiddleware(thunk));

const store = createStore(rootReducer, devToolsEnhancer({}));

export default store;