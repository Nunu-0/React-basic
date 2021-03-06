import React from 'react';
import styles from 'button.module.css';

const Button = ({name, onClick}) => {
    return (
        <button className={syles.button} onClick={onClick}>
            {name}
        </button>
    );
};

export default Button;