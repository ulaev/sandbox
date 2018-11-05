import React from "react";
import { BrowserRouter as Link } from "react-router-dom";

import style from "./style.css";

class HeadPanelPure extends React.PureComponent {
  render() {
    return (
      <div className={style.container}>
        <ul>
          <li>
            <Link to="/">Выбор мира</Link>
          </li>
          <li>
            <Link to="/world/">Мир</Link>
          </li>
          <li>
            <Link to="/admin/">Админка</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default HeadPanelPure;
