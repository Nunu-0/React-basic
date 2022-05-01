import React from 'react';

const Video_list = (props) => {
    <ul>
        {props.videos.map(video = > <VideoItem video = {video}></VideoItem>)}
    </ul>
};

export default Video_list;