import React from 'react';
import style from './style.css';

class WorldPure extends React.PureComponent {
  render() {
    return (
      <div className={style.container}>
        Мир 
      </div>
    )
  }
}

export default WorldPure
