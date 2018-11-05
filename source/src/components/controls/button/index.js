import React from 'react';
import style from "./style.css";

class Button extends React.PureComponent {
    render() {
      return (
        <div className={style.button}>This is button</div>
      )
    }
}

export default Button;
