import React from 'react';
import Card from '../card/card';
import CardAddForm from '../card_add_form/card_add_form';
import CardEditForm from '../card_edit_form/card_edit_form';
import styles from './editor.module.css'

const Editor = ({cards, createOrUpdateCard, deleteCard}) => (
        <section className={styles.editor}>
            <h1 className={styles.title}>Card Maker</h1>    
            {Object.keys(cards).map(key =>(
                <CardEditForm key={key} card={cards[key]} createOrUpdateCard={createOrUpdateCard} deleteCard={deleteCard}/>
            ))}
            <CardAddForm onAdd={createOrUpdateCard}/>
        </section>
    );

export default Editor;