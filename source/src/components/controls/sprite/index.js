import { connect } from 'react-redux';
import SpritePure from './SpritePure';

const mapStateToProps = store => ({
    forecast: store.forecast,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SpritePure);
