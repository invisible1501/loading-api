import { GET_USER_SUCCESS, DELETE_USER_FAIL, DELETE_USER_SUCCESS } from "./actions";

const initialState = {
    users: [],
    isLoading: true,
}

export default function GetUserReducer(state = initialState, action) {
    let _state = {...state};
    switch(action.type) {
        case GET_USER_SUCCESS:
            console.log(action.payload);
            _state = {..._state, users: action.payload.users, isLoading: action.payload.isLoading}
            break;
        case DELETE_USER_SUCCESS:
            _state = {..._state};
            break;
        case DELETE_USER_FAIL:
            break;
    }
    return _state;
}