import React, { useEffect, useState } from 'react';
import './app.css';
import SearchHeader from './components/search_header/search_header';
import VideoList from './components/video_list/video_list';

function App() {
  const [videos, setVideos] = useState([]);
  const [set, setName] = useState('yw');

  useEffect(()=>{
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyBDS3vPcU7ZtWufy13-XKHGViHhiysnU2s", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  }, [])

  return (
    <SearchHeader />
    <VideoList videos={videos} />
  );
}

export default App;
