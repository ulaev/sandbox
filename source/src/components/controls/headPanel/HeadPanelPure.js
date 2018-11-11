import React from "react";
import { Link } from "react-router-dom";

import style1 from "./style.css";

class HeadPanelPure extends React.PureComponent {
  render() {
    return (
      <div className={style1.container}>
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
