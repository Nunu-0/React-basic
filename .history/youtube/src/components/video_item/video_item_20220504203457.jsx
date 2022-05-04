import React from 'react';
import styles from './video_item.module.css'

const VideoItem = memo(
    ({video, video: {snippet : s}, onVideoClick, display})=>{
    const displayType = display === 'list' ? styles.list : styles.grid;
    return (
    <li className={`${styles.container} ${displayType}`} onClick={() => onVideoClick(video)}>
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
)};)

export default VideoItem;
