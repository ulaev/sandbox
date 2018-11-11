import { connect } from 'react-redux';
import HeadPanelPure from './HeadPanelPure';

const mapStateToProps = store => ({
    forecast: store.forecast,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(HeadPanelPure);
