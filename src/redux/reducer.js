const initState = {};

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SORT_STATUS':
            return { status: action.payload.status };

        case 'FILTER':
            return { filter: action.payload.filter };

        case 'TOOGLE_STATUS':
            return { toogle: action.payload.toogle };

        case 'TOOGLE_UPDATE':
            return { update: action.payload.update };

        default:
            return state;
    }
};

export default rootReducer;
