import React from "react";
import PropTypes from "prop-types";
import style from "./style.css";

import MAP_TILES from "../../../../constants/sprites2";

import RoguelikeSheet from "../../../../assets/img/roguelikeSheet_transparent.png";

class MapPure extends React.Component {
  constructor(props) {
    super(props);

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
        )
      );
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.gameTickStamp != nextProps.gameTickStamp) {

    }
  }

  render() {
    const styleContainer = {
      left: this.props.cameraPos.left,
      top: this.props.cameraPos.top
    };
    return (
      <div className={style.zoom}>
        <div className={style.container} style={styleContainer}>
          <canvas id="map" width={this.props.mapLayers.world[0].length * 16} height={this.props.mapLayers.world.length * 16}/>
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
