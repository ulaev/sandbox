import React from 'react';
import PropTypes from 'prop-types';
import style from './style.css';
import Sprite from '../../controls/sprite';
import {Water1, Grass1, Water2, Coast4} from '../../../constants/sprites';

class WorldPure extends React.PureComponent {

  getSprite = id => {
    
  }

  render() {
    console.log(this.props.mapLayers.map((item) => item));
    return (
      <div className={style.container}>
        <Sprite sprite={Grass1} x={0} y={0}></Sprite>
        <Sprite sprite={Water1} x={16} y={0}></Sprite>
        <Sprite sprite={Water1} x={32} y={0}></Sprite>
      </div>
    )
  }
}

WorldPure.propTypes = {
  mapLayers: PropTypes.array.isRequired
}
export default WorldPure
