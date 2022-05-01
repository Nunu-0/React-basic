import React, { useEffect, useState } from 'react';
import './app.css';

function App() {
  const [videos, setVideos] = useState([]);
  const [set, setName] = useState('yw');

  useEffect(()=>{
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyBDS3vPcU7ZtWufy13-XKHGViHhiysnU2s", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

  return (
    <h1>Hello~!!</h1>
  );
}

export default App;
