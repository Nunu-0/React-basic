import React from 'react';
import styles from './card_edit_form.module.css';

const CardEditForm = ({card}) => {
    const {name, company, title, email, message, theme, fileNmae, fileURL} = card;

    return(
        <form>
            <input type="text" name='name' value={name}/>
            <input type="text" name='company' value={company}/>
            <select name="theme" value={theme}>
                <option value="light">light</option>
            </select>
            <input type="text" name='title' value={title}/>
            <input type="text" name='email' value={email}/>
        </form>
    )
};

export default CardEditForm;