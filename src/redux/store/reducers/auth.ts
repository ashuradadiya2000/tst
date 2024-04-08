import { AUTH_SUCCESS, AUTH_FAIL } from "../actions/auth";

const initialState = {
    token: null,
    role: null,
    authenticated: false,
};

const auth = (state = initialState, action: any) => {
    switch (action.type) {
        case AUTH_SUCCESS:
            return {
                ...state,
                user: action.payload?.user,
                token: action?.payload?.auth?.token,
                role: action?.payload?.role,
                authenticated: true,
            };
        case AUTH_FAIL:
            return {
                token: null,
                user: null,
                role: null,
                authenticated: false,
            };
        default:
            return state;
    }
};

export default auth;
