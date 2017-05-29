import axios from "axios";

export const USER_LOGIN_FULFILLED = "USER_LOGIN_FULFILLED";
export const USER_LOGIN_REJECTED = "USER_LOGIN_REJECTED";
export const USER_LOGIN = "USER_LOGIN";


export function userLogin(email, password) {

    return function (dispatch) {
        dispatch({type: USER_LOGIN});

        axios.get("/api/users/login")
            .then((response) => {
                dispatch({type: USER_LOGIN_FULFILLED, payload: response.data})
            })
            .catch((err) => {
                dispatch({type: USER_LOGIN_REJECTED, payload: err})
            })
    }


}