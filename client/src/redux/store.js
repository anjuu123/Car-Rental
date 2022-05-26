import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import { carReducer } from './reducers/carReducers';


const composeEnhancers = composeWithDevTools({

 
});
const rootReducer = combineReducers({
    carReducer

})
const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(...middleware)
   
  )
);