import axios from 'axios';

import {
    GET_WRITEABLE_JOURNAL_REQUEST,
    GET_WRITEABLE_JOURNAL_SUCCESS,
    GET_WRITEABLE_JOURNAL_FAIL,
} from "../constants/journalConstants";


export const get_writeable_journals = () => async (dispatch, getState) => {
    try {
        dispatch({type: GET_WRITEABLE_JOURNAL_REQUEST})

        const {userLogin: {
                userInfo
            }} = getState()


        const config = {
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${
                    userInfo.token
                }`
            }
        }

        const {data} = await axios.get(`/api/app/get/writeable/journals/`, config)
        dispatch({type: GET_WRITEABLE_JOURNAL_SUCCESS, payload: data})


    } catch (error:any) {
        dispatch({
            type: GET_WRITEABLE_JOURNAL_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail : error.message
        })
    }
}

