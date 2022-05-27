
import './App.css';
import {Routes,Route, BrowserRouter} from 'react-router-dom';
import Home from './Pages/Home';
import Register from './Pages/Register';
import Login from './Pages/Login';
import CarBooking from './Pages/CarBooking';
import 'antd/dist/antd.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route exact path='/'  element={<Home/>} />
          <Route exact path='/login' element={<Login/>} />
          <Route exact path='/register' element={<Register/>} />
          <Route exact path='/carbooking' element={<CarBooking/>} />
      </Routes>
      </BrowserRouter>
       
    </div>
  );
}

export default App;
