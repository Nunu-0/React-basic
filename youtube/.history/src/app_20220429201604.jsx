import React, { useEffect, useState } from 'react';
import './app.css';

function App() {
  const [videos, setVideos] = useState([]);
  const [set, setName] = useState('yw');

  useEffect(()=>{
    console.log('useEffect')
  }, []);

  return (
    <h1>Hello~!!</h1>
  );
}

export default App;
