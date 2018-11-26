import { connect } from 'react-redux';
import AdminPanelPure from './AdminPanelPure';

const mapStateToProps = store => ({
    forecast: store.forecast,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AdminPanelPure);
