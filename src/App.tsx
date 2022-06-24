import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import './App.css';
import { Layout } from 'antd';
import Profile from './components/Profile';
import Login from './components/Login';
import News from './components/News';
import Main from './components/Main';
const { Header, Footer, Content } = Layout;


function App() {
  return <>
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/news' element={<News />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
          <Route path='/login' element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  </>
  ;
}

export default App;
