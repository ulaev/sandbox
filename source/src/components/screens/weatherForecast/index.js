import { connect } from 'react-redux';
import WeatherForecastPure from './WeatherForecastPure';

const mapStateToProps = store => {
  return {
    forecast: store.forecast
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeatherForecastPure)
