import { connect } from 'react-redux';
import HeadPanelPure from './HeadPanelPure';

const mapStateToProps = store => ({
    forecast: store.forecast,
});

const mapDispatchToProps = () => ({
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(HeadPanelPure);
