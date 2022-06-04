import React, { useEffect, useState } from 'react';
import { useHistory, useNavigate } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({ FileInput, authService }) => {
  const [cards, setCards] = useState({
		1: {
      id: '1',
      name: 'YW1',
      company: 'SANGMYUNG',
      theme: 'white',
      title: 'Software Engineer',
      email: 'lyu2015@gmail.com',
      message: 'go for it',
      fileName: 'yw',
      fileURL: null,
    },
    2: {
      id: '2',
      name: 'YW2',
      company: 'SANGMYUNG',
      theme: 'dark',
      title: 'Software Engineer',
      email: 'lyu2015@gmail.com',
      message: 'go for it',
      fileName: 'yw',
      fileURL: null,
    },
    3: {
      id: '3',
      name: 'YW3',
      company: 'SANGMYUNG',
      theme: 'colorful',
      title: 'Software Engineer',
      email: 'lyu2015@gmail.com',
      message: 'go for it',
      fileName: 'yw',
      fileURL: null,
    },
  });

  const navigate = useNavigate();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange(user => {
      if (!user) {
        navigate('/');
      }
    });
  });

  const createOrUpdateCard = card => {
    setCards(cards => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };

  const deleteCard = card => {
    setCards(cards => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          FileInput={FileInput}
          cards={cards}
          addCard={createOrUpdateCard}
          updateCard={createOrUpdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
