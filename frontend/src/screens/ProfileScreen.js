import React, { useState, useEffect } from 'react';
import { updateUser, signin } from '../actions/userActions';
import { useDispatch, useSelector } from 'react-redux';

function ProfileScreen(props) {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } = userSignin;

  const userUpdate = useSelector(state => state.userUpdate);
  const { loading, success, error } = userUpdate;

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updateUser({ _id: userInfo._id, email, name, password }));
  }

  useEffect(() => {
    if (userInfo) {
      setEmail(userInfo.email);
      setName(userInfo.name);
      setPassword(userInfo.password);
    }
    return () => {
        //
    };
  }, [userInfo])

  return <div className="profile">
    <div className="profile-info">
      <div className="form">
        <form onSubmit={submitHandler} >
          <ul className="form-container">
            <li>
              <h2>User Profile</h2>
            </li>
            <li>
              {loading && <div>Loading...</div>}
              {error && <div>{error}</div>}
              {success && <div>Profile Saved Successfully.</div>}
            </li>
            <li>
              <label htmlFor="name">Name</label>
              <input value={name} type="name" name="name" id="name" onChange={(e) => setName(e.target.value)}>
              </input>
            </li>
            <li>
              <label htmlFor="email">Email</label>
              <input value={email} type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}>
              </input>
            </li>
            <li>
              <label htmlFor="password">Password</label>
              <input value={password || ''} type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)}>
              </input>
            </li>
            <li>
              <button type="submit" className="button primary">Update</button>
            </li>

          </ul>
        </form>
      </div>
    </div>
  </div>
}

export default ProfileScreen;