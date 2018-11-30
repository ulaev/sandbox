export const MOVE_CAMER = 'MOVE_CAMER';

export const moveCamera = ({ left, top }) => (dispatch) => {
    dispatch({
        type: MOVE_CAMER,
        payload: { left: left, top: top },
    });
};