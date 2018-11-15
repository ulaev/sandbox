import React from 'react';
import style from './style.css';
import Sprite from '../../controls/sprite';

class WorldPure extends React.PureComponent {
  render() {
    return (
      <div className={style.container}>
        <Sprite></Sprite>

      </div>
    )
  }
}

export default WorldPure
