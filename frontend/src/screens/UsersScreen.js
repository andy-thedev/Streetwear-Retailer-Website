import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser, listUsers, register_without_logout, updateUser } from '../actions/userActions';
import { Link } from 'react-router-dom';

function UsersScreen(props) {
    const [createModalVisible, setCreateModalVisible] = useState(false);
    const [editModalVisible, setEditModalVisible] = useState(false);
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');

    const userList = useSelector(state => state.userList);
    const { loading, users, error } = userList;

    const userRegister = useSelector(state => state.userRegister);
    const { loadingRegister, userInfo, errorRegister } = userRegister;

    const userUpdate = useSelector(state => state.userUpdate);
    const { loading: loadingUpdate, success: successUpdate, error: errorUpdate } = userUpdate;

    const userDelete = useSelector(state => state.userDelete);
    const { loading: loadingDelete, success: successDelete, error: errorDelete } = userDelete;

    const dispatch = useDispatch();

    useEffect(() => {
        if (successUpdate) {
            setCreateModalVisible(false);
        }
        dispatch(listUsers());
        return () => {
            //
        };
    }, [successUpdate, successDelete]);

    const openCreateModal = (user) => {
        setCreateModalVisible(true);
        setId(user._id);
        setName(user.name);
        setEmail(user.email);
        setPassword(user.password);
        setRePassword(user.rePassword);
    }

    const openEditModal = (user) => {
        setEditModalVisible(true);
        setId(user._id);
        setName(user.name);
        setEmail(user.email);
        setPassword(user.password);
    }

    const submitCreateHandler = (e) => {
        e.preventDefault();
        dispatch(register_without_logout(name, email, password));
        setCreateModalVisible(false)
        dispatch(listUsers());
    }

    const submitEditHandler = (e) => {
        e.preventDefault();
        dispatch(updateUser({
            _id: id, name, email, password
        }));
        setEditModalVisible(false)
        dispatch(listUsers());
    }

    const deleteHandler = (user) => {
        dispatch(deleteUser(user._id));
        dispatch(listUsers());
    }

    return (<div className="content content-margined">
        <div className="product-header">
            <h3>Users</h3>
            <button className="button primary" onClick={() => openCreateModal({})}>Create User</button>
        </div>
        {createModalVisible && (
            <div className="form">
                <form onSubmit={submitCreateHandler}>
                    <ul className="form-container">
                        <li>
                            <h2>Create Account</h2>
                        </li>
                        <li>
                            {loading && <div>Loading...</div>}
                            {error && <div>{error}</div>}
                        </li>
                        <li>
                            <label htmlFor="name">
                                Name
                            </label>
                            <input type="name" name="name" id="name" onChange={(e) => setName(e.target.value)}>
                            </input>
                        </li>
                        <li>
                            <label htmlFor="email">
                                Email
                    </label>
                            <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}>
                            </input>
                        </li>
                        <li>
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}>
                            </input>
                        </li>
                        <li>
                            <label htmlFor="rePassword">Re-Enter Password</label>
                            <input type="password" id="rePassword" name="rePassword" onChange={(e) => setRePassword(e.target.value)}>
                            </input>
                        </li>
                        <li>
                            <button type="submit" className="button primary">Register</button>
                        </li>
                        <li>
                            <button type="button" onClick={() => setCreateModalVisible(false)} className="button secondary">Back</button>
                        </li>
                    </ul>
                </form>
            </div>
        )}

        {editModalVisible && (
            <div className="form">
                <form onSubmit={submitEditHandler}>
                    <ul className="form-container">
                        <li>
                            <h2>Edit Account</h2>
                        </li>
                        <li>
                            {loading && <div>Loading...</div>}
                            {error && <div>{error}</div>}
                        </li>
                        <li>
                            <label htmlFor="name">
                                Name
                            </label>
                            <input type="name" name="name" value={name} id="name" onChange={(e) => setName(e.target.value)}>
                            </input>
                        </li>
                        <li>
                            <label htmlFor="email">
                                Email
                    </label>
                            <input type="email" name="email" value={email} id="email" onChange={(e) => setEmail(e.target.value)}>
                            </input>
                        </li>
                        <li>
                            <label htmlFor="password">Password</label>
                            <input type="password" value={password} id="password" name="password" onChange={(e) => setPassword(e.target.value)}>
                            </input>
                        </li>
                        <li>
                            <button type="submit" className="button primary">Update</button>
                        </li>
                        <li>
                            <button type="button" onClick={() => setEditModalVisible(false)} className="button secondary">Back</button>
                        </li>
                    </ul>
                </form>
            </div>
        )}

        <div className="product-list">
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Admin</th>
                    </tr>
                </thead>
                <tbody>
                    {users && users.map((user) => (
                        <tr key={user._id}>
                            <td>{user._id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{String(user.isAdmin)}</td>
                            <td>
                                <button className="button" onClick={() => openEditModal(user)}>Edit</button>
                                {' '}
                                <button className="button" onClick={() => deleteHandler(user)}>Delete</button>
                            </td>
                        </tr>))
                    }
                </tbody>
            </table>
        </div>
    </div>
    );
}

export default UsersScreen;