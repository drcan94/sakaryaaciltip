export const getIsCheckedReducer = (state=true, action) => {

    switch (action.type) {
        case "GET_IS_CHECKED":
            localStorage.setItem("isChecked", JSON.stringify(!state));
            return !state

        default:
            return state
    }
}
