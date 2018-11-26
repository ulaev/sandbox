import { connect } from 'react-redux';
import WorldСhoicePure from './WorldСhoicePure';

const mapStateToProps = store => ({
    forecast: store.forecast,
});

const mapDispatchToProps = dispatch => ({
    createWorld: params => dispatch(createWorld(params)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(WorldСhoicePure);
