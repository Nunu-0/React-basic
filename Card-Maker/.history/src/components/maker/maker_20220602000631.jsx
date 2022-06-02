import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({authService}) => {
    const [cards, setCards] = useSatae([
        {
            id: '1',
            name: 'yw',
            company: 'sangmyung',
            theme: 'light',
            email: 'lyu2015@gmail.com',
            message: 'go for it',
            fileName: 'yw',
            fileURL
        }
        {
            id: '1',
            name: 'yw',
            company: 'sangmyung',
            theme: 'light',
            email: 'lyu2015@gmail.com',
            message: 'go for it',
            fileName: 'yw',
            fileURL
        }
        {
            id: '1',
            name: 'yw',
            company: 'sangmyung',
            theme: 'light',
            email: 'lyu2015@gmail.com',
            message: 'go for it',
            fileName: 'yw',
            fileURL
        }
    ]);
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
    })
    return(
        <section className={styles.maker}>
            <Header onLogout={onLogout}/>
            <div className={styles.container}>
                <Editor/>
                <Preview/>
            </div>
            <Footer/>
        </section>
    )
};

export default Maker;