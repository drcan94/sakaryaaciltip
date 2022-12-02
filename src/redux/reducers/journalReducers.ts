import {
  GET_WRITEABLE_JOURNAL_REQUEST,
  GET_WRITEABLE_JOURNAL_SUCCESS,
  GET_WRITEABLE_JOURNAL_FAIL,
  GET_WRITEABLE_JOURNAL_RESET,
} from "../constants/journalConstants";

export const getWriteableJournalsReducer = (
  state = { success: false, journals: [] },
  action
) => {
  switch (action.type) {
    case GET_WRITEABLE_JOURNAL_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_WRITEABLE_JOURNAL_SUCCESS:
      return {
        loading: false,
        journals: action.payload,
        success: true,
      };

    case GET_WRITEABLE_JOURNAL_FAIL:
      return {
        loading: false,
        success: false,
        error: action.payload,
      };

    case GET_WRITEABLE_JOURNAL_RESET:
      return {
        journals: [],
      };

    default:
      return state;
  }
};
