const Action = {
    Types: {
        UPDATE_STATE: 'UPDATE_STATE',
    },

    Creators: {
        updateState: (payload) => ({
            type: Action.Types.UPDATE_STATE,
            payload
        }),
    }
};

export default Action;