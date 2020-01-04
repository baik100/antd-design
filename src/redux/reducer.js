import Action from './action';

const INITIAL_STATE = {
    isLoggedIn : false,
}

const reducer = (state = INITIAL_STATE, action) => {

    console.log("@@ action", action);

    switch (action.type) {
        case Action.Types.UPDATE_STATE: {
            return {
                ...state,
                ...action.payload
            }
        }
        default: return state;
    }
};

export default reducer;