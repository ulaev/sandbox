const initialState = {
    buttons: {
        up: false,
        down: false,
        left: false,
        right: false
    }
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "BUTTON_DOWN_UP":
            return {
                ...state,
                buttons: { ...state.buttons, up: true },
            };
        case "BUTTON_DOWN_DOWN":
            return {
                ...state,
                buttons: { ...state.buttons, down: true },
            };
        case "BUTTON_DOWN_LEFT":
            return {
                ...state,
                buttons: { ...state.buttons, left: true },
            };
        case "BUTTON_DOWN_RIGHT":
            return {
                ...state,
                buttons: { ...state.buttons, right: true },
            };
        case "BUTTON_UP_UP":
            return {
                ...state,
                buttons: { ...state.buttons, up: false },
            };
        case "BUTTON_UP_DOWN":
            return {
                ...state,
                buttons: { ...state.buttons, down: false },
            };
        case "BUTTON_UP_LEFT":
            return {
                ...state,
                buttons: { ...state.buttons, left: false },
            };
        case "BUTTON_UP_RIGHT":
            return {
                ...state,
                buttons: { ...state.buttons, right: false },
            };
        default:
            return state;
    }
};
