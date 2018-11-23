import { GAME_TICK } from '../actions/GameTickAction';

const initialState = {
    gameTickStamp: Date.now(),
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GAME_TICK:
            return {
                ...state,
                gameTickStamp: Date.now(),
            };

        default:
            return state;
    }
};