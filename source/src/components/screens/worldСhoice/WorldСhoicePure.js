import React from 'react';
import style from './style.css';

class WorldPure extends React.PureComponent {
  render() {
    return (
      <div className={style.container}>
        Выбор мира <br></br>
        <label>world name:</label><br></br>
        <input type="text" name="worldName" /><br></br>
        <button>Создать</button><br></br>
      </div>
    )
  }
}

export default WorldPure
