import { connect } from 'react-redux';
import { getForecast } from '../../../actions/YandexForecastActions';
import WorldPure from './WorldPure';

const mapStateToProps = store => ({
    forecast: store.forecast,
});

const mapDispatchToProps = dispatch => ({
    getForecast: params => dispatch(getForecast(params)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(WorldPure);
