import { USER_AUTH_SUCCESS } from "../actions/userAuth";

const initialState = {
    token: null,
    role: null,
    authenticated: false,
};

const Userauth = (state = initialState, action: any) => {
    switch (action.type) {
        case USER_AUTH_SUCCESS:
            return {
                ...state,
                // token: action?.payload?.auth?.token,
                // role: action?.payload?.role,
                // authenticated: true,
            };
        default:
            return state;
    }
};

export default Userauth;
