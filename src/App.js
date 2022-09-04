
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'; //bootstrap


import Navbar from './compount/Navbar/Navbar';
import Home from './compount/Home/Home';
import Users from './compount/Users/Users'
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter >
    <Navbar/>
    <Routes>
<Route path='/Home' element={<Home/>}/>
<Route path='/Users' element={<Users/>}/>



   

    </Routes>

    
  </BrowserRouter>
  );
}

export default App;
