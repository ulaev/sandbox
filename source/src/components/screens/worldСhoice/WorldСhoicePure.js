import React from 'react';
import style from './style.css';

class WorldPure extends React.PureComponent {
  render() {
    return (
      <div className={style.container}>
        Выбор мира 
      </div>
    )
  }
}

export default WorldPure
