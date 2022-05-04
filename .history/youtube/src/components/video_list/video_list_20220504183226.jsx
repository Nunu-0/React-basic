import React from 'react';
import VideoItem from '../video_item/video_item';
import stytls from './video_list.module.css';

const VideoList = ({videos, onVideoClick, display}) => (
    <ul className={stytls.videos}>
        {videos.map(video => (
            <VideoItem key={video.id} video={video} onVideoClick={onVideoClick} display={display}/>
        ))}
    </ul>
);

export default VideoList;
