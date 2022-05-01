import React, { useEffect, useState } from 'react';
import './app.css';

function App() {
  const [videos, setVideos] = useState([]); // 변수와 업데이터 함수


  useEffect(()=>{
    console.log('useEffect')
  }, []);

  return (
    <h1>Hello~!!!</h1>
  );
}

export default App;
