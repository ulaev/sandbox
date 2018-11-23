export const buttonDown = (button) => (dispatch) => {
    dispatch({
        type: `BUTTON_DOWN_${button}`
    });
};