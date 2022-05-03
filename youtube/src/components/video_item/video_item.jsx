import React from 'react';
import styles from './video_item.module.css'

const VideoItem = ({video: {snippet : s}})=>(
    <li className={styles.container}>
        <div className={styles.video}>
        <img className={styles.thumbnail}
        src={s.thumbnails.medium.url} 
        alt="video thumbnail" />
        <div className={styles.metaData}>
            <p className={styles.title}>{s.title}</p>
            <p className={styles.channel}>{s.channelTitle}</p>
        </div>
        </div>
    </li>
);

export default VideoItem;
