import React from "react";
import PropTypes from "prop-types";
import style from "./style.css";
import Map from "./map";

class WorldPure extends React.PureComponent {
  componentDidMount() {
    this.gameLoopIndex = setInterval(() => {
      this.props.gameTick();
    }, 100);

    document.onkeydown = (e) => {
      e = e || window.event;
      switch (e.which || e.keyCode) {
        case 37: this.props.buttonDown('LEFT');
          break;

        case 38: this.props.buttonDown('UP');
          break;

        case 39: this.props.buttonDown('RIGHT');
          break;

        case 40: this.props.buttonDown('DOWN');
          break;

        default: return;
      }
      e.preventDefault();
    }

    document.onkeyup = (e) => {
      e = e || window.event;
      switch (e.which || e.keyCode) {
        case 37: this.props.buttonUp('LEFT');
          break;

        case 38: this.props.buttonUp('UP');
          break;

        case 39: this.props.buttonUp('RIGHT');
          break;

        case 40: this.props.buttonUp('DOWN');
          break;

        default: return;
      }
      e.preventDefault();
    }
  }

  componentWillUnmount() {
    clearInterval(this.gameLoopIndex);
  }

  render() {
    return (
      <div className={style.camera}>
        <Map />
      </div>
    );
  }
}

WorldPure.propTypes = {
  gameTick: PropTypes.func.isRequired,
  buttonUp: PropTypes.func.isRequired,
  buttonDown: PropTypes.func.isRequired,
};
export default WorldPure;
