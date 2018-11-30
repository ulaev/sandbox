import { connect } from 'react-redux';
import NpcPure from './NpcPure';
// import SpriteHero from '../../../../../constants/spriteHero';

const mapStateToProps = store => ({
    gameTickStamp: store.gameTickStamp,
    buttons: store.buttons.buttons
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(NpcPure);
