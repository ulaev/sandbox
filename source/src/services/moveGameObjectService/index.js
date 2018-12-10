import { connect } from 'react-redux';
import MoveGameObjectService from './MoveGameObjectService';

const mapStateToProps = store => ({
    mapLayers: store.mapLayers.mapLayers
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(MoveGameObjectService);
