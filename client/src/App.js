
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './Pages/Home';
import Register from './Pages/Register';
import Login from './Pages/Login';
import CarBooking from './Pages/CarBooking';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route exact path='/'  element={<Home/>} />
          <Route exact path='/login' element={<Login/>} />
          <Route exact path='/register' element={<Register/>} />
          <Route exact path='/carbooking' element={<CarBooking/>} />
      </Routes>
    </div>
  );
}

export default App;
