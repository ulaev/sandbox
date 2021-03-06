import React from "react";
import PropTypes from "prop-types";
import style from "./style.css";

class HeroPure extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            left: 150,
            top: 150
        };
    }

    speed = 5;

    componentWillReceiveProps(nextProps) {
        if (this.props.gameTickStamp != nextProps.gameTickStamp) {//Game Tick
            if (this.props.buttons.up) {
                this.state.top -= this.speed;
            }
            if (this.props.buttons.down) {
                this.state.top += this.speed;
            }
            if (this.props.buttons.left) {
                this.state.left -= this.speed;
            }
            if (this.props.buttons.right) {
                this.state.left += this.speed;
            }

            this.props.moveCamera({ left: 250 - (this.state.left), top: 100 - (this.state.top) });
        }
    }

    render() {
        const styleContainer = { left: this.state.left, top: this.state.top };
        return (
            <div className={style.hero} style={styleContainer}></div>
        );
    }
}

HeroPure.propTypes = {
    gameTickStamp: PropTypes.object.isRequired,
    buttons: PropTypes.object.isRequired,
    moveCamera: PropTypes.func.isRequired,
};

export default HeroPure;
