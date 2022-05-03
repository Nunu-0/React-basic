import React from 'react';
import VideoItem from '../video_item/video_item';
import stytls from './video_list.module.css';

const VideoList = props => (
    <ul className={stytles.vidoes}>
    {props.videos.map(video => (
        <VideoItem key={video.id} video={video} />
    ))}
    </ul>
);

export default VideoList;
