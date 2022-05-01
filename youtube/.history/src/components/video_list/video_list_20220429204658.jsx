import React from 'react';

const Video_list = (props) => {
    <ul>
        {props.videos.map(video = > (
        <VideoItem video = {video}/>))}
    </ul>
};

export default Video_list;