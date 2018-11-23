export const buttonUp = (button) => (dispatch) => {
    dispatch({
        type: `BUTTON_UP_${button}`
    });
};