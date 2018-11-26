import React from "react";
import PropTypes from "prop-types";
import style from "./style.css";
import Map from "./map";

class WorldPure extends React.PureComponent {
  componentDidMount() {
    this.gameLoopIndex = setInterval(() => {
      this.props.gameTick();

    }, 100);

    // keyUp = (key) =>{
    //   switch (key) {
    //     case 37: !this.props.buttons.left ? this.props.buttonDown('LEFT') : null;
    //       break;

    //     case 38: !this.props.buttons.up ? this.props.buttonDown('UP'): null;
    //       break;

    //     case 39: !this.props.buttons.right ? this.props.buttonDown('RIGHT'): null;
    //       break;

    //     case 40: !this.props.buttons.down ? this.props.buttonDown('DOWN'): null;
    //       break;

    //     default: return;
    //   }
    // }

    document.onkeydown = (e) => {
      e = e || window.event;
      switch (e.which || e.keyCode) {
        case 37: !this.props.buttons.left ? this.props.buttonDown('LEFT') : null;
          break;

        case 38: !this.props.buttons.up ? this.props.buttonDown('UP'): null;
          break;

        case 39: !this.props.buttons.right ? this.props.buttonDown('RIGHT'): null;
          break;

        case 40: !this.props.buttons.down ? this.props.buttonDown('DOWN'): null;
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
  buttons: PropTypes.object.isRequired
};
export default WorldPure;
