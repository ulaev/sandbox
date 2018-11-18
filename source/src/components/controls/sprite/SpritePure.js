import React from 'react';
import style from './style.css';
import {Water1, Grass1, Water2, Coast4} from '../../../constants/sprites';

// class Sprite extends React.PureComponent {
  class Sprite extends React.PureComponent {
    render() {
      return (
        <div className={style.sprite} style={Coast4}></div>
      )
    }
}

export default Sprite;
