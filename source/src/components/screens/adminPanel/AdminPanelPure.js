import React from 'react';
import style from './style.css';

class AdminPanelPure extends React.PureComponent {
  render() {
    return (
      <div className={style.container}>
        Админка 
      </div>
    )
  }
}

export default AdminPanelPure
