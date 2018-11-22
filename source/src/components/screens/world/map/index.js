import { connect } from 'react-redux';
import MapPure from './MapPure';

const mapStateToProps = store => ({
    mapLayers: store.mapLayers.mapLayers,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(MapPure);
