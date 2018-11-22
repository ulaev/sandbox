import React from "react";
import PropTypes from "prop-types";
import style from "./style.css";
import Sprite from "../../../controls/sprite";
import {
  Water1,
  Grass1,
  Water2,
  Coast1,
  Coast2,
  Coast3,
  Coast4,
  Coast5,
  Coast6,
  Coast7,
  Coast8
} from "../../../../constants/sprites";

class MapPure extends React.PureComponent {
  getSprite = id => {
    switch (id) {
      case 1:
        return Grass1;
      case 2:
        return Coast1;
      case 3:
        return Coast2;
      case 4:
        return Coast3;
      case 5:
        return Coast4;
      case 6:
        return Coast5;
      case 7:
        return Water1;
      case 8:
        return Coast6;
      case 9:
        return Coast7;
      case 10:
        return Coast8;
    }
  };

  render() {
    return (
      <div className={style.container}>
        {this.props.mapLayers.world.map((y, yIndex) =>
          y.map((xy, xIndex) => (
            <Sprite
              key={`world${xIndex}${yIndex}`}
              sprite={this.getSprite(xy)}
              x={xIndex * 16}
              y={yIndex * 16}
            />
          ))
        )}
      </div>
    );
  }
}

MapPure.propTypes = {
  mapLayers: PropTypes.object.isRequired
};

export default MapPure;
