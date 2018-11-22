import React from "react";
import PropTypes from "prop-types";
import style from "./style.css";
import Map from "./map";

class WorldPure extends React.PureComponent {
  componentDidMount() {
    this.gameLoopIndex = setInterval(() => {

    }, 33);
  }

  componentWillUnmount() {
    clearInterval(this.gameLoopIndex);
  }

  render() {
    return (
      <div className={style.camera}>
        <div className={style.container}>
          <Map />
        </div>
      </div>
    );
  }
}

WorldPure.propTypes = {
  // mapLayers: PropTypes.object.isRequired
};
export default WorldPure;
