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

class MapPure extends React.Component {

  constructor(props) {
    super(props);
    // this.state = {
    //   left: props.cameraPos.left,
    //   top: props.cameraPos.top
    // };
  }

  cameraSpeed = 10;

  componentWillReceiveProps(nextProps) {
    if (this.props.gameTickStamp != nextProps.gameTickStamp) {//Game Tick
      // this.state.top = this.props
      //   if (this.props.buttons.up) {
      //     this.state.top += this.cameraSpeed;
      //   }
      //   if (this.props.buttons.down) {
      //     this.state.top -= this.cameraSpeed;
      //   }
      //   if (this.props.buttons.left) {
      //     this.state.left += this.cameraSpeed;
      //   }
      //   if (this.props.buttons.right) {
      //     this.state.left -= this.cameraSpeed;
      //   }
      // }
    }
  }

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
    const styleContainer = { left: this.props.cameraPos.left, top: this.props.cameraPos.top };
    return (
      <div className={style.zoom}>
        <div className={style.container} style={styleContainer}>
          {this.props.mapLayers.world.map((y, yIndex) =>
            y.map((xy, xIndex) => (
              <Sprite
                key={`world${xIndex}_${yIndex} `}
                sprite={this.getSprite(xy)}
                x={xIndex * 16}
                y={yIndex * 16}
              />
            ))
          )}
          {this.props.children}
        </div>
      </div>
    );
  }
}

MapPure.propTypes = {
  mapLayers: PropTypes.object.isRequired,
  gameTickStamp: PropTypes.object.isRequired,
  buttons: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired,
  cameraPos: PropTypes.object.isRequired
};

export default MapPure;
