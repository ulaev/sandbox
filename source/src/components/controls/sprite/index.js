import React from 'react';
import PropTypes from 'prop-types';
import style from './style.css';

const Sprite = ({sprite, x, y}) => {
    const styles = {
        ...sprite, 
        left:`${x}px`,
        top:`${y}px`};
    return (
        <div className={style.sprite} style={styles}></div>
    )
}

Sprite.propTypes = {
    sprite: PropTypes.object.isRequired,
    x: PropTypes.number,
    y: PropTypes.number
}

export default Sprite;
