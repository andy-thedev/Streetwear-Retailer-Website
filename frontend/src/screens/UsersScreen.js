import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listUsers } from '../actions/userActions';

function UsersScreen(props) {

    const userList = useSelector(state => state.userList);
    const { loading, users, error } = userList;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listUsers());
        return () => {
            //
        };
    }, []);

    return (<div className="content content-margined">
        <div className="product-header">
            <h3>Users</h3>
        </div>
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
                        </tr>))}
                </tbody>
            </table>
        </div>
    </div>
    );
}

export default UsersScreen;