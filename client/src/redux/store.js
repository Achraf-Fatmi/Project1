import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import Middleware from 'redux-thunk';
import Reducers from './reducers'
const intialState={}
const store = createStore(
    
    Reducers,
    intialState,
    composeWithDevTools(applyMiddleware(Middleware))
)

export default store