import React from "react";
import PropTypes from "prop-types";
import style from "./style.css";

class HeroPure extends React.Component {
    render() {
        return (
        <div className={style.hero}></div>
        );
    }
}

HeroPure.propTypes = {
  mapLayers: PropTypes.object.isRequired,
  gameTickStamp: PropTypes.object.isRequired,
  buttons: PropTypes.object.isRequired
};

export default HeroPure;
