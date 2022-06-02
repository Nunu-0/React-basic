import React from 'react';
import Button from '../button/button';
import ImageFileInput from '../image_file_input/image_file_input';
import styles from './card_add_form.module.css';

const CardAddForm = () => {
    const onSubmit = () =>{
        
    };

    return(
        <form className={styles.form}>
            <input ref={name} className={styles.input} type="text" name='name' placeholder='name'/>
            <input ref={company} className={styles.input} type="text" name='company' placeholder='company'/>
            <select ref={theme} className={styles.select} name="theme" placeholder='theme'>
                <option placeholder="light">light</option>
                <option placeholder="dark">dark</option>
                <option placeholder="colorful">colorful</option>
            </select>
            <input ref={title} className={styles.input} type="text" name='title' placeholder='title'/>
            <input ref={email} className={styles.input} type="text" name='email' placeholder='email'/>
            <textarea ref={message} className={styles.textarea} name="message" placeholder='message'></textarea>
            <div className={styles.fileInput}>
                <ImageFileInput/>
            </div>
                <Button name="Add" onClick={onSubmit}/>
        </form>
    )
};

export default CardAddForm;