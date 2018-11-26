import { connect } from 'react-redux';
import { buttonDown } from '../../../actions/ButtonDownAction';
import { buttonUp } from '../../../actions/ButtonUpAction';
import { gameTick } from '../../../actions/GameTickAction';
import WorldPure from './WorldPure';

const mapStateToProps = store => ({
    buttons: store.buttons.buttons
});

const mapDispatchToProps = dispatch => ({
    gameTick: params => dispatch(gameTick(params)),
    buttonUp: params => dispatch(buttonUp(params)),
    buttonDown: params => dispatch(buttonDown(params))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(WorldPure);
