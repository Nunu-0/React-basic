import React from 'react';
import styles from './card.module.css';

const DEFAULT_IMAGE='/images/default_logo.png';
const Card = ({card}) => {
    const {name, company, title, email, message, theme, fileNmae, fileURL} = card;
    const url = fileURL || DEFAULT_IMAGE;
    return(
        <li>
            <img src={url} alt="profile photo" />
            <div>
                <h1>{name}</h1>
                <p>{company}</p>
                <p>{title}</p>
                <p>{email}</p>
                <p>{message}</p>
            </div>
        </li>
    );
}

export default Card;