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
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_FAIL,
  USER_LIST_RESET,
  USER_PROFILE_UPDATE_REQUEST,
  USER_PROFILE_UPDATE_SUCCESS,
  USER_PROFILE_UPDATE_FAIL,
  USER_PROFILE_UPDATE_RESET,
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
} from "../constants/userConstants";


export const userLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return {
                loading: true
            }


        case USER_LOGIN_SUCCESS:
            return {
                loading: false,
                userInfo: action.payload
            }

        case USER_LOGIN_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case USER_LOGOUT:
            return {}

        default:
            return state
    }
}

export const userRegisterReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_REGISTER_REQUEST:
            return {
                loading: true
            }

        case USER_REGISTER_SUCCESS:
            return {
                loading: false,
                userInfo: action.payload
            }

        case USER_REGISTER_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case USER_LOGOUT:
            return {}

        default:
            return state
    }
}


export const userProfileDetailReducer = (state = { user: {} }, action) => {
    switch (action.type) {
        case USER_PROFILE_DETAIL_REQUEST:
            return {
                ...state,
                loading: true
            }

        case USER_PROFILE_DETAIL_SUCCESS:
            return {
                loading: false,
                user: action.payload
            }

        case USER_PROFILE_DETAIL_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case USER_PROFILE_DETAIL_RESET:
            return {
                user: {}
            }

        default:
            return state
    }
}

export const userProfileUpdateReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_PROFILE_UPDATE_REQUEST:
            return {
                loading: true
            }

        case USER_PROFILE_UPDATE_SUCCESS:
            return {
                loading: false,
                success: true,
                userInfo: action.payload
            }

        case USER_PROFILE_UPDATE_FAIL:
            return {
                loading: false,
                success: false,
                error: action.payload
            }

        case USER_PROFILE_UPDATE_RESET:
            return {}


        default:
            return state
    }
}


export const userListReducer = (state = { users: [] }, action) => {
    switch (action.type) {
        case USER_LIST_REQUEST:
            return {
                loading: true
            }

        case USER_LIST_SUCCESS:
            return {
                loading: false,
                users: action.payload
            }

        case USER_LIST_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case USER_LIST_RESET:
            return { users: [] }

        default:
            return state
    }
}

export const userDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_DELETE_REQUEST:
            return {
                loading: true
            }

        case USER_DELETE_SUCCESS:
            return {
                loading: false,
                success: true
            }

        case USER_DELETE_FAIL:
            return {
                loading: false,
                error: action.payload
            }


        // case USER_DELETE:
        //     return {
        //         ...state,
        //         users: state.users.filter(user => user.id !== Number(action.payload))
        //     }


        default:
            return state
    }
}

export const getUserReducer = (state = { user: {} }, action) => {
    switch (action.type) {
        case USER_GET_REQUEST:
            return {
                ...state,
                loading: true
            }

        case USER_GET_SUCCESS:
            return {
                loading: false,
                user: action.payload
            }

        case USER_GET_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case USER_GET_RESET:
            return {
                user: {}
            }

        default:
            return state
    }
}

export const updateUserReducer = (state = { user: {} }, action) => {

    switch (action.type) {
        case USER_UPDATE_REQUEST:
            return {
                loading: true
            }

        case USER_UPDATE_SUCCESS:
            return {
                loading: false,
                success: true,
            }

        case USER_UPDATE_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case USER_UPDATE_RESET:
            return { user: {} }


        default:
            return state
    }

}