import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Redirect,
} from 'react-router-dom';
import './App.css';
import LoginPage from './components/authPages/LoginPages/LoginPage';
import RegisterPage from './components/authPages/RegisterPages/RegisterPage';
import DashBoard from './components/authPages/Dashboard/Dashboard';

function App() {
  return (
    <Router>
        <Routes>
          <Route path='/login' element={<LoginPage/>}>
          </Route>

          <Route path='/register' element={<RegisterPage/>}>
          </Route>

          <Route path='/' element={<DashBoard/>}>
          </Route>
        </Routes>
    </Router>
  );
}

export default App;
