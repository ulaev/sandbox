export const GAME_TICK = 'GAME_TICK';

export const gameTick = () => (dispatch) => {
    dispatch({
        type: GAME_TICK
    });
};
