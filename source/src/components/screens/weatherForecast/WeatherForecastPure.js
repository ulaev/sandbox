import React from 'react';
import Button from '../../controls/button';

class WeatherForecastPure extends React.PureComponent {
  handleClick = () => {
    this.props
      .getForecast({
        lat: '53.5156261',
        lon: '49.2811153',
      })
      .then(() => {})
      .catch(err => {
        console.log('error:', err)
      })
  }

  render() {
    return (
      <div>
        test
        <Button></Button>
        <button onClick={this.handleClick}>кнопка</button>
        <p>{this.props.forecast.date}</p>
      </div>
    )
  }
}

export default WeatherForecastPure
