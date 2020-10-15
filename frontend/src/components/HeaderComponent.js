import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link} from 'react-router-dom';
import {logout} from '../actions/userActions';

function HeaderComponent(props) {
    const dispatch = useDispatch();
    const openMenu = () => {
        document.querySelector('.sidebar').classList.add('open');
      }
    const handleLogout = () => {
        dispatch(logout());
        window.location = '/';
    }


    return <header className="header">
        <div className="brand">
            <button onClick={openMenu}>&#9776;</button>
            <Link to="/">Company</Link>
        </div>
        <div className="header-links">
            <Link to="/cart">Cart</Link>
            {
                props.userInfo ? props.userInfo.isAdmin ? <Link to="/users">Users</Link> :
                    '' : ''
            }
            {
                props.userInfo ? props.userInfo.isAdmin ? <Link to="/products">Products</Link> :
                    '' : ''
            }
            {
                props.userInfo ? <Link to="/profile">{props.userInfo.name}</Link> :
                    <Link to="/signin">Sign In</Link>
            }
            {
                props.userInfo ? <button type="button" onClick={handleLogout} className='button logout'>Logout</button> :
                    ''
            }
        </div>
    </header>
}

export default HeaderComponent;