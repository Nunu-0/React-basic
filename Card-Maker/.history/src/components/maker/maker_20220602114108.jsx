import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({authService}) => {
    const [cards, setCards] = useState({
        '1':{
            id: '1',
            name: 'yw',
            company: 'sangmyung',
            theme: 'light',
            email: 'lyu2015@gmail.com',
            message: 'go for it',
            fileName: 'yw',
        } 
    });
    const navigate = useNavigate();

    const onLogout = () =>{
        authService.logout();
    };

    useEffect(()=>{
        authService.onAuthChange(user=>{
            if(!user){
                navigate('/');
            }
        })
    });

    const addCard = (card) =>{
        const updated = [...cards, card];
        setCards(updated);
    }
    const updateCard = (card) =>{
        const updated = cards.map(item =>{
            if(card.id === item.id){
                return m
            }
        })
    }
    const deleteCard = (card) =>{
        const updated = [...cards, card];
        setCards(updated);
    }
    return(
        <section className={styles.maker}>
            <Header onLogout={onLogout}/>
            <div className={styles.container}>
                <Editor cards={cards} addCard={addCard} updateCard={updateCard} deleteCard={deleteCard}/>
                <Preview cards={cards}/>
            </div>
            <Footer/>
        </section>
    )
};

export default Maker;