import React from 'react';
import style from './style.css';
import {Water1} from '../../../constants/sprites';

class Sprite extends React.PureComponent {
    render() {
      return (
        <div className={style.sprite} style={Water1}></div>
      )
    }
}

export default Sprite;
