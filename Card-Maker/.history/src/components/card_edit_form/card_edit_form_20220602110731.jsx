import React from 'react';
import Button from '../button/button';
import ImageFileInput from '../image_file_input/image_file_input';
import styles from './card_edit_form.module.css';

const CardEditForm = ({card}) => {
    const nameRef = useRef();
    const companyRef = useRef();
    const themeRef = useRef();
    const titleRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();
    
    const {name, company, title, email, message, theme, fileNmae, fileURL} = card;

    const onSubmit = () =>{

    };
    return(
        <form className={styles.form}>
            <input ref={nameRef} className={styles.input} type="text" name='name' placeholder='name'/>
            <input ref={companyRef} className={styles.input} type="text" name='company' placeholder='company'/>
            <select ref={themeRef} className={styles.select} name="theme" placeholder='theme'>
                <option placeholder="light">light</option>
                <option placeholder="dark">dark</option>
                <option placeholder="colorful">colorful</option>
            </select>
            <input ref={titleRef} className={styles.input} type="text" name='title' placeholder='title'/>
            <input ref={emailRef} className={styles.input} type="text" name='email' placeholder='email'/>
            <textarea ref={messageRef} className={styles.textarea} name="message" placeholder='message'></textarea>
            <div className={styles.fileInput}>
                <ImageFileInput/>
            </div>
                <Button name="Delete" onClick={onSubmit}/>
        </form>
    )
};

export default CardEditForm;