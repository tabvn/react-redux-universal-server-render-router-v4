import {USER_LOGIN_FULFILLED, USER_LOGIN_REJECTED} from '../actions/user'

const user = (state = {}, action) => {
    switch (action.type) {

        case USER_LOGIN_FULFILLED: {
            return state.payload;
            break;
        }
        case USER_LOGIN_REJECTED: {
            return state.payload;
            break;
        }

        default:
            return state
    }
}

export default user