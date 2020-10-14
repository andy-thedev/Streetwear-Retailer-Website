import React, { useState } from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProductsScreen from './screens/ProductsScreen';
import UsersScreen from './screens/UsersScreen';
import { useDispatch, useSelector } from 'react-redux';
import {logout} from './actions/userActions';
import HeaderComponent from './HeaderComponent';


function App() {

  const dispatch = useDispatch();

  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } = userSignin;

  const handleLogout = () => {
    dispatch(logout());
  }

  const openMenu = () => {
    document.querySelector('.sidebar').classList.add('open');
  }
  const closeMenu = () => {
    document.querySelector('.sidebar').classList.remove('open');
  }

  return (
    <BrowserRouter>
      <div className="grid-container">
        <HeaderComponent userInfo ={userInfo}/>
        <aside className="sidebar">
          <h3>Shopping Categories</h3>
          <ul>
            <li>
              <a href="index.html">Pants</a>
              <button className="sidebar-close-button" onClick={closeMenu}>x</button>
            </li>
            <li>
              <a href="index.html">Shirts</a>
            </li>
          </ul>
        </aside>
        <main className="main">
          <div className="content">
            <Route path="/products/" component={ProductsScreen} />
            <Route path="/signin" component={SigninScreen} />
            <Route path="/register" component={RegisterScreen} />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/" exact={true} component={HomeScreen} />
            <Route path="/createadmin" component = {RegisterScreen}/>
            <Route path="/users" component={UsersScreen} />
          </div>
        </main>
        <footer className="footer">
          All right reserved.
      </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
