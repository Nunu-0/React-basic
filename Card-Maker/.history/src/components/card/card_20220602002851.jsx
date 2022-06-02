import React from 'react';
import styles from './card.module.css';

const DEFAULT_IMAGE='/images/default_logo.png';
const Card = ({card}) => {
    const {name, company, title, email, message, theme, fileNmae, fileURL} = card;
    const url = fileURL || DEFAULT_IMAGE;
    return(
        <li>
            <img src={url} alt="profile photo" />
        </li>
    );
}

export default Card;