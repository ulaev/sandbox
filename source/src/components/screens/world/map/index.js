import { connect } from 'react-redux';
import MapPure from './MapPure';

const mapStateToProps = store => ({
    mapLayers: store.mapLayers.mapLayers,
    gameTickStamp: store.gameTickStamp,
    buttons: store.buttons.buttons
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(MapPure);
