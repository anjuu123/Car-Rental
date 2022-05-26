import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import { carReducer } from './reducers/carReducers';
import { alertReducer } from './reducers/alertReducers';


const composeEnhancers = composeWithDevTools({

 
});
const rootReducer = combineReducers({
    carReducer,
    alertReducer,

})
const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk)
   
  )
);

export default store;