import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../actions/userActions';
import CategoryComponent from './CategoryComponent';

function HeaderComponent(props) {
    const dispatch = useDispatch();
    const openMenu = () => {
        document.querySelector('.sidebar').classList.add('open');
    }
    const closeMenu = () => {
        document.querySelector('.sidebar').classList.remove('open');
    }
    const handleLogout = () => {
        dispatch(logout());
        window.location = '/';
    }


    return (
        <div>
            <header className="header">
                <div className="brand">
                    <button onClick={openMenu}>&#9776;</button>
                    <Link to="/"> COMPANY</Link>
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
            <aside className="sidebar">
                {
                    props.userInfo ?
                        <div>
                            <div className="sidebar-title">
                                Hello {props.userInfo.name},
                            </div>
                            <div className="sidebar-greeting">
                                Great to have you back.
                            </div>
                        </div>
                         : 
                        <div>
                            <div className="sidebar-title">
                                Hello there user,
                            </div>
                            <div className= "sidebar-greeting">
                                Please Sign-in.
                            </div>
                        </div>
                }
                <ul className="sidebar-category-list" id="sidebar">
                    <li>
                        <button className="sidebar-close-button" onClick={closeMenu}>x</button>
                    </li>
                    <div className="sidebar-category-component">
                        <CategoryComponent/>
                    </div>
                </ul>
            </aside>
        </div>
    )
}

export default HeaderComponent;