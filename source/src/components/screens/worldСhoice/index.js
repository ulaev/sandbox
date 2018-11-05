import { connect } from 'react-redux';
import { getForecast } from '../../../actions/YandexForecastActions';
import WorldСhoicePure from './WorldСhoicePure';

const mapStateToProps = store => ({
    forecast: store.forecast,
});

const mapDispatchToProps = dispatch => ({
    getForecast: params => dispatch(getForecast(params)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(WorldСhoicePure);
