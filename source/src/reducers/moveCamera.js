import { MOVE_CAMER } from '../actions/MoveCamera';

const initialState = {
    cameraPos: { left: 0, top: 0 },
};

export default (state = initialState, action) => {
    switch (action.type) {
        case MOVE_CAMER:
            return {
                ...state,
                cameraPos: { left: action.payload.left, top: action.payload.top }
            };

        default:
            return state;
    }
};