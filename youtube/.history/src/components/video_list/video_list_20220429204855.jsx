import React from 'react';

const VideoList = props => (
    <ul>
        {props.videos.map(video => (
        <VideoItem key={} video={video}/>
        ))}
    </ul>
);

export default VideoList;