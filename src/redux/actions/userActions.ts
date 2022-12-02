import axios from 'axios';

import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,

    USER_LOGOUT,

    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,

    USER_PROFILE_DETAIL_REQUEST,
    USER_PROFILE_DETAIL_SUCCESS,
    USER_PROFILE_DETAIL_FAIL,
    USER_PROFILE_DETAIL_RESET,

    USER_PROFILE_UPDATE_REQUEST,
    USER_PROFILE_UPDATE_SUCCESS,
    USER_PROFILE_UPDATE_FAIL,

    USER_LIST_REQUEST,
    USER_LIST_SUCCESS,
    USER_LIST_FAIL,
    USER_LIST_RESET,

    USER_DELETE_REQUEST,
    USER_DELETE_SUCCESS,
    USER_DELETE_FAIL,

    USER_GET_REQUEST,
    USER_GET_SUCCESS,
    USER_GET_FAIL,
    USER_GET_RESET,

    USER_UPDATE_REQUEST,
    USER_UPDATE_SUCCESS,
    USER_UPDATE_FAIL,
    USER_UPDATE_RESET,
} from '../constants/userConstants'

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: USER_LOGIN_REQUEST
        })

        const config = {
            headers: {
                "Content-type": "application/json"
            }
        }
        const {data} = await axios.post(
            "/api/user/login/",
            {
                'username': email,
                'password': password
            },
            config,
        )

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })


        localStorage.setItem('userInfo', JSON.stringify(data))


    } catch (error:any) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }
}


export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo')
    dispatch({type: USER_LOGOUT})
    dispatch({type: USER_PROFILE_DETAIL_RESET})
    dispatch({type: USER_LIST_RESET})
    dispatch({type: USER_GET_RESET})
    dispatch({type: USER_UPDATE_RESET})
}


export const register = (name, email, password) => async (dispatch) => {
    try {
        dispatch({
            type: USER_REGISTER_REQUEST
        })

        const config = {
            headers: {
                "Content-type": "application/json"
            }
        }

        const {data} = await axios.post(
            "/api/user/register/",
            {
                'name': name,
                'email': email,
                'password': password,
            },
            config,
        )

        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data
        })

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))


    } catch (error:any) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }
}

export const getUserProfile = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: USER_PROFILE_DETAIL_REQUEST
        })

        const {userLogin: {userInfo}} = getState()


        const config = {
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${userInfo.token}`
            }
        }

        const {data} = await axios.get(
            `/api/user/${id}`,
            config,
        )

        dispatch({
            type: USER_PROFILE_DETAIL_SUCCESS,
            payload: data
        })


    } catch (error:any) {
        dispatch({
            type: USER_PROFILE_DETAIL_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }
}

export const updateUserProfile = (user) => async (dispatch, getState) => {
    try {
        dispatch({
            type: USER_PROFILE_UPDATE_REQUEST
        })

        const {userLogin: {userInfo}} = getState()


        const config = {
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${userInfo.token}`
            }
        }

        const {data} = await axios.put(
            "/api/user/profile/update/",
            user,
            config,
        )

        dispatch({
            type: USER_PROFILE_UPDATE_SUCCESS,
            payload: data
        })

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))


    } catch (error:any) {
        dispatch({
            type: USER_PROFILE_UPDATE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }
}

export const getListUser = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: USER_LIST_REQUEST
        })

        const {userLogin: {userInfo}} = getState()


        const config = {
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${userInfo.token}`
            }
        }

        const {data} = await axios.get(
            "/api/user/allusers/",
            config,
        )

        dispatch({
            type: USER_LIST_SUCCESS,
            payload: data
        })


    } catch (error:any) {
        dispatch({
            type: USER_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }
}

export const deleteUserByAdmin = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: USER_DELETE_REQUEST
        })

        const {userLogin: {userInfo}} = getState()

        const config = {
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${userInfo.token}`
            }
        }

        const {data} = await axios.delete(
            `/api/user/delete/${id}`,
            config,
        )

        dispatch({
            type: USER_DELETE_SUCCESS,
            payload: data
        })

    } catch (error:any) {
        dispatch({
            type: USER_DELETE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }
}

export const getUser = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: USER_GET_REQUEST
        })

        const {userLogin: {userInfo}} = getState()


        const config = {
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${userInfo.token}`
            }
        }

        const {data} = await axios.get(
            `/api/user/get/${id}`,
            config,
        )

        dispatch({
            type: USER_GET_SUCCESS,
            payload: data
        })


    } catch (error:any) {
        dispatch({
            type: USER_GET_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }
}

export const updateUser = (user) => async (dispatch, getState) => {
    try {
        dispatch({
            type: USER_UPDATE_REQUEST
        })

        const {userLogin: {userInfo}} = getState()

        const config = {
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${userInfo.token}`
            }
        }
        const {data} = await axios.put(
            `/api/user/update/${user._id}/`,
            user,
            config,
        )

        dispatch({
            type: USER_UPDATE_SUCCESS,
        })

        dispatch({
            type: USER_GET_SUCCESS,
            payload: data
        })


    } catch (error: any) {
        dispatch({
            type: USER_UPDATE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
        })
    }
}