import React from 'react';
import VideoItem from '../video_item/video_item';

const VideoList = props => (
    <ul>
        {props.items.map(items => (
        <VideoItem key={items.id} video={items}/>
        ))}
    </ul>
);

export default VideoList;