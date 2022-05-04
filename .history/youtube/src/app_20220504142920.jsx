import React, { useEffect, useState } from 'react';
import styles from './app.module.css';
import SearchHeader from './components/search_header/search_header';
import VideoDetail from './components/video_detail/video_detail';
import VideoList from './components/video_list/video_list';

function App({youtube}) {
  const [videos, setVideos] = useState([]);
  const [seletedVideo, setSelectedVideo] = useState(null);
  const search = query => {
    youtube.search(query)
    .then(videos => setVideos(videos))
  };

  useEffect(()=>{
    youtube.mostPopular()
    .then(videos => setVideos(videos))
  }, []);

  return (
  <div className={styles.app}>
    <SearchHeader onSearch={search}/>
    {
      seletedVideo && <VideoDetail video = {selectedVideo}></VideoDetail>
    }
    <VideoList videos={videos} />
  </div>
  );
}

export default App;