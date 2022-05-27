import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import { carsReducer } from './reducers/carsReducers';
import { alertReducer } from './reducers/alertReducers';


const composeEnhancers = composeWithDevTools({

 
});
const rootReducer = combineReducers({
    carsReducer,
    alertReducer,

})
const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk)
   
  )
);

export default store;