import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProductsScreen from './screens/ProductsScreen';
import UsersScreen from './screens/UsersScreen';
import { useSelector } from 'react-redux';
import HeaderComponent from './components/HeaderComponent';
import ProfileScreen from './screens/ProfileScreen';


function App() {

  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } = userSignin;

  return (
    <BrowserRouter>
      <div className="grid-container">
        <HeaderComponent userInfo ={userInfo}/>
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
            <Route path="/profile" component={ProfileScreen} userInfo = {userInfo} />          </div>
        </main>
        <footer className="footer">
          All right reserved.
      </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
