import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import {combineReducers} from "@reduxjs/toolkit";
import logger from 'redux-logger';
import {batchedSubscribe} from 'redux-batched-subscribe'
import _ from "lodash"

import {
    userLoginReducer,
    userRegisterReducer,
    userProfileDetailReducer,
    userProfileUpdateReducer,
    userListReducer,
    userDeleteReducer,
    getUserReducer,
    updateUserReducer,
} from './reducers/userReducers'

import {
    getWriteableJournalsReducer,
} from './reducers/journalReducers'

import {getIsCheckedReducer} from "./reducers/themeReducer";


const reducer = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userProfileDetail: userProfileDetailReducer,
    userProfileUpdate: userProfileUpdateReducer,
    userList: userListReducer,
    userDelete: userDeleteReducer,
    getUser: getUserReducer,
    updateUser: updateUserReducer,
    writeableJournals: getWriteableJournalsReducer,
    isChecked: getIsCheckedReducer
})

const userInfo = localStorage.getItem('userInfo')
const userInfoFromLS = userInfo ? JSON.parse(userInfo) : localStorage.setItem('userInfo', JSON.stringify([]))

const isChecked = localStorage.getItem('isChecked')
const isCheckedFromLS = isChecked ? JSON.parse(isChecked) : localStorage.setItem("isChecked", JSON.stringify(true))


const preloadedState = {
    userLogin: {
        userInfo: userInfoFromLS,
    },
    isChecked: isCheckedFromLS
}

const debounceNotify = _.debounce(notify => notify());

export const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState,
    enhancers: [batchedSubscribe(debounceNotify)],
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
