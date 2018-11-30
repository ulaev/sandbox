import { connect } from 'react-redux';
import HeroPure from './HeroPure';
import SpriteHero from '../../../../../constants/spriteHero';
import { moveCamera } from '../../../../../actions/MoveCamera';

const mapStateToProps = store => ({
    gameTickStamp: store.gameTickStamp,
    buttons: store.buttons.buttons
});

const mapDispatchToProps = dispatch => ({
    moveCamera: params => dispatch(moveCamera(params)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(HeroPure);
