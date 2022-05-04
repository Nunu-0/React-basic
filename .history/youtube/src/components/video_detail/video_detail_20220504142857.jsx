import React from 'react';
import styles from './video_detail.module.css'
const Video_detail = ({video}) => (
            <h1>{video.snippet.title}</h1>
    );

export default Video_detail;