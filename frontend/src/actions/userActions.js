import Axios from "axios";
import Cookie from 'js-cookie';
import { USER_SIGNIN_FAIL, USER_SIGNIN_SUCCESS, USER_SIGNIN_REQUEST, 
    USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAIL, 
    USER_LIST_FAIL, USER_LIST_SUCCESS, USER_LIST_REQUEST, 
    USER_DELETE_FAIL, USER_DELETE_SUCCESS, USER_DELETE_REQUEST, 
    USER_UPDATE_FAIL, USER_UPDATE_SUCCESS, USER_UPDATE_REQUEST,
    USER_LOGOUT} from '../constants/userConstants';

const listUsers = () => async(dispatch, getState) => {
    try {
        dispatch({ type: USER_LIST_REQUEST });
        const { userSignin: { userInfo } } = getState();
        const { data } = await Axios.get("/api/users", {
            headers: {
                Authorization: 'Bearer ' + userInfo.token,
            },
        });
        dispatch({ type: USER_LIST_SUCCESS, payload: data });
    }
    catch (error) {
        dispatch({ type: USER_LIST_FAIL, payload: error.message });
    }
}

const signin = (email, password) => async (dispatch) => {
    dispatch({type: USER_SIGNIN_REQUEST, payload: {email, password}});
    try {
        const {data} = await Axios.post("/api/users/signin", {email, password});
        dispatch({type: USER_SIGNIN_SUCCESS, payload: data});
        Cookie.set('userInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({type: USER_SIGNIN_FAIL, payload: error.message});
    }
}

const register = (name, email, password) => async (dispatch) => {
    dispatch({type: USER_REGISTER_REQUEST, payload: {name, email, password}});
    try {
        const {data} = await Axios.post("/api/users/register", {name, email, password});
        dispatch({type: USER_REGISTER_SUCCESS, payload: data});
        Cookie.set('userInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({type: USER_REGISTER_FAIL, payload: error.message});
    }
}

const updateUser  = (user) => async (dispatch, getState) => {
    dispatch({type: USER_UPDATE_REQUEST, payload: {user}});
    const { userSignin: {userInfo} } = getState();
    try {
        const {data} = await Axios.put("/api/users/" + user._id, user, {
            headers: {
                Authorization: 'Bearer ' + userInfo.token,
            },
        });
        dispatch({type: USER_UPDATE_SUCCESS, payload: data});
    } catch (error) {
        dispatch({type: USER_UPDATE_FAIL, payload: error.message});
    }
}

const register_without_logout = (name, email, password) => async (dispatch) => {
    dispatch({type: USER_REGISTER_REQUEST, payload: {name, email, password}});
    try {
        const {data} = await Axios.post("/api/users/register", {name, email, password});
        dispatch({type: USER_REGISTER_SUCCESS, payload: data});
    } catch (error) {
        dispatch({type: USER_REGISTER_FAIL, payload: error.message});
    }
}

const register_admin = (name, email, password) => async (dispatch) => {
    dispatch({type: USER_REGISTER_REQUEST, payload: {name, email, password}});
    try {
        const {data} = await Axios.post("/api/users/createadmin", {name, email, password});
        dispatch({type: USER_REGISTER_SUCCESS, payload: data});
        Cookie.set('userInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({type: USER_REGISTER_FAIL, payload: error.message});
    }
}

const logout = () => (dispatch) => {
    Cookie.remove("userInfo");
    Cookie.remove("cartItems");
    dispatch({type: USER_LOGOUT})
}

const deleteUser = (userId) => async (dispatch, getState) => {
    try {
        const {userSignin: {userInfo}} = getState();
        dispatch({ type: USER_DELETE_REQUEST, payload: userId });
        const { data } = await Axios.delete("/api/users/" + userId, {
            headers: {
                Authorization: 'Bearer ' + userInfo.token,
            },
        });
        dispatch({ type: USER_DELETE_SUCCESS, payload: data, success: true });
    } catch (error) {
        dispatch({ type: USER_DELETE_FAIL, payload: error.message });
    }
}

export {signin, register, register_admin, logout, listUsers, deleteUser, register_without_logout, updateUser};