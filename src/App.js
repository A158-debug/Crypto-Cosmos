/* eslint-disable import/first */
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Layout,Typography,Space} from 'antd';
import  Navbar  from './components/Navbar';
import  HomePage  from './components/HomePage';
import  Cryptocurrencies  from './components/Cryptocurrencies';
import  CryptoDetails  from './components/CryptoDetails';
import  News  from './components/News';

import './App.css';


const App = () => (
  <div className="app">
    <div className="navbar">
     <Navbar/>
    </div>
    <div className="main">
      <Layout>
        <div className="routes">
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/cryptocurrencies" element={<Cryptocurrencies />} />
            <Route exact path="/crypto/:coinId" element={<CryptoDetails />} />
            <Route exact path="/news" element={<News />} />
          </Routes>
        </div>
      </Layout>
      <div className="footer">
        <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>Copyright © 2022
          <Link to="/"> Abhishek Kumar </Link> <br />
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          <Link to="/news">News</Link>
          <Link to="/cryptocurrencies">Cryptocurrencies</Link>
        </Space>
      </div>
    </div>
  </div>
);

export default App;