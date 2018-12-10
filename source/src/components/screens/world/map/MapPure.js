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

import MAP_TILES from "../../../../constants/sprites2";

// import RoguelikeSheet from "../../../../assets/img/roguelikeSheet_transparent.png";
import RoguelikeSheet from "../../../../assets/img/roguelikeSheet_transparent.png";

class MapPure extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   left: props.cameraPos.left,
    //   top: props.cameraPos.top
    // };
  }
  componentDidMount() {
    this.drawMap();
  }
  cameraSpeed = 10;

  drawMap() {
    this.canvas = document.getElementById("map");
    this.ctx = this.canvas.getContext("2d");
    const spriteImage = new Image();
    spriteImage.src = `/${RoguelikeSheet}`;


    class Tile {
      constructor(type, ctx) {
        this.type = type;
        this.ctx = ctx;
      }

      draw(x, y) {
        this.ctx.drawImage(
          spriteImage,
          this.type.x,
          this.type.y,
          16,
          16,
          x,
          y,
          16,
          16
        );
      }
    }

    spriteImage.onload = () => {
      this.props.mapLayers.world.map((y, yIndex) =>
        y.map(
          (xy, xIndex) => {
            const tileId = xy;
            const tileType = MAP_TILES[tileId];
            new Tile(tileType, this.ctx).draw(xIndex * 16, yIndex * 16);
          }
          // (

          //   <Sprite
          //     key={`world${xIndex}_${yIndex} `}
          //     sprite={this.getSprite(xy)}
          //     x={xIndex * 16}
          //     y={yIndex * 16}
          //   />
          // )
        )
      );
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.gameTickStamp != nextProps.gameTickStamp) {
      //Game Tick
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
    const styleContainer = {
      left: this.props.cameraPos.left,
      top: this.props.cameraPos.top
    };
    return (
      <div className={style.zoom}>
        <div className={style.container} style={styleContainer}>
          <canvas id="map" width={this.props.mapLayers.world[0].length * 16} height={this.props.mapLayers.world.length * 16}/>
          {/* <svg
            width={this.props.mapLayers.world[0].length * 16}
            height={this.props.mapLayers.world.length * 16}
            xmlns="http://www.w3.org/2000/svg"
            xlink="http://www.w3.org/1999/xlink"
          >
            <image
              href={`/${RoguelikeSheet}`}
              // transform="translate(17 0)"
              // viewBox="0 0 16 16"
            />
            <defs>
              <clipPath id="svgPath2">
                <rect x="0" y="0" width="16" height="16" />
              </clipPath>
            </defs>
          </svg> */}
          {/* {this.props.mapLayers.world.map((y, yIndex) =>
            y.map((xy, xIndex) => (
              <Sprite
                key={`world${xIndex}_${yIndex} `}
                sprite={this.getSprite(xy)}
                x={xIndex * 16}
                y={yIndex * 16}
              />
            ))
          )} */}
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
