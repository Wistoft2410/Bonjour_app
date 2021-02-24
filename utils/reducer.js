import { storeToken, removeToken } from './tokenHelper';

export const reducer = (prevState, action) => {
    switch (action.type) {
        case 'RESTORE_TOKEN':
            console.log("[RESTORE-TOKEN] Token is: "+action.token);
            return {
                ...prevState,
                userToken: action.token,
                isLoading: false,
            };
        case 'SIGN_IN':
            storeToken(action.token);
            return {
                ...prevState,
                isSignout: false,
                userToken: action.token,
            };
        case 'SIGN_OUT':
            removeToken();
            return {
                ...prevState,
                isSignout: true,
                userToken: null,
            };
    }
};

export const initialState = {
    isLoading: true,
    isSignout: false,
    userToken: null,
  };