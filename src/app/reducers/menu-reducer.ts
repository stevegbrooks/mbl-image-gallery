const TOGGLE_MENU = 'TOGGLE_MENU';
function menuReducer(state, action) {
    switch (action.type) {
        case TOGGLE_MENU:
            state = action.payload;
            return state;
        default:
            return state
    }
}
export { menuReducer, TOGGLE_MENU };
