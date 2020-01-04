const Action = {
    Types: {
        UPDATE_STATE: 'UPDATE_STATE',
    },

    Creators: {
        updateState: (payload) => ({
            type: Action.Type.UPDATE_STATE,
            payload
        }),
    }
};

export default Action;