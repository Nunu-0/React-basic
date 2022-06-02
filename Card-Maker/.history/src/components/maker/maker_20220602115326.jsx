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
        },
        '2':{
            id: '2',
            name: 'yw',
            company: 'sangmyung',
            theme: 'dark',
            email: 'lyu2015@gmail.com',
            message: 'go for it',
            fileName: 'yw',
        },
        '3':{
            id: '3',
            name: 'yw',
            company: 'sangmyung',
            theme: 'colorful',
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

    const createOrUpdateCard = (card) =>{
        setCards(cards =>{
            const updated = {...cards};
            updated[card.id] = card;
            return updated;
        });
    }
    const deleteCard = (card) =>{
        const updated = [...cards, card];
        setCards(updated);
    }
    return(
        <section className={styles.maker}>
            <Header onLogout={onLogout}/>
            <div className={styles.container}>
                <Editor cards={cards} createOrUpdateCard={createOrUpdateCard} updateCard={updateCard} deleteCard={deleteCard}/>
                <Preview cards={cards}/>
            </div>
            <Footer/>
        </section>
    )
};

export default Maker;