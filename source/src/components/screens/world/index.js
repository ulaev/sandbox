import { connect } from 'react-redux';
import { gameTick } from '../../../actions/GameTickAction';
import { buttonUp } from '../../../actions/ButtonUpAction';
import { buttonDown } from '../../../actions/ButtonDownAction';
import WorldPure from './WorldPure';

const mapStateToProps = store => ({
    // mapLayers: store.mapLayers.mapLayers,
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
