import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css'

import Home from './containers/Home';
import Checkout from './containers/Checkout';
import Information from './containers/Information';
import Payment from './containers/Payment';
import Success from './containers/Success';
import NotFound from './containers/NotFound';
import Layout from './components/Layout';
import AppContext from './context/AppContext';
import useInitialState from './hooks/useInitialState';

const App = () => {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
    <Layout/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/checkout" element={<Checkout/>} />
      <Route path="/checkout/information" element={<Information/>} />
      <Route path="/checkout/payment" element={<Payment/>} />
      <Route path="/checkout/success" element={<Success/>} />
      <Route element={<NotFound/>} />
    </Routes>
    </AppContext.Provider>
   
  );
}

export default App;