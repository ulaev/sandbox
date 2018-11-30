import React from "react";
import PropTypes from "prop-types";
import style from "./style.css";

class NpcPure extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            left: Math.floor((Math.random() * 500) + 1),
            top: Math.floor((Math.random() * 300) + 1)
        };
    }

    speed = 2;
    direction = 4;

    componentWillReceiveProps(nextProps) {
        if (this.props.gameTickStamp != nextProps.gameTickStamp) {//Game Tick

            if (this.direction === 1) {
                this.state.top -= this.speed;
            }
            if (this.direction === 2) {
                this.state.top += this.speed;
            }
            if (this.direction === 3) {
                this.state.left -= this.speed;
            }
            if (this.direction === 4) {
                this.state.left += this.speed;
            }

            if (Math.floor((Math.random() * 10) + 1) == 1) {
                this.direction = Math.floor((Math.random() * 4) + 1);
            }
        }
    }

    render() {
        const styleContainer = { left: this.state.left, top: this.state.top };
        return (
            <div className={style.npc} style={styleContainer}></div>
        );
    }
}

NpcPure.propTypes = {
    gameTickStamp: PropTypes.object.isRequired,
};

export default NpcPure;
