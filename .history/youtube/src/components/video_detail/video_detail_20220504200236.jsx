import React from 'react';
import styles from './video_detail.module.css'
const VideoDetail = ({video, video :{snippet : s}}) => (
        <section className={styles.detail}>
            <iframe className={styles.video} type="text/html" 
            width="100%" height="500px"
            src={`https://www.youtube.com/embed/${video.id}`}
            frameBorder="0" allowFullScreen></iframe>
            <h2>{s.title}</h2>
            <h2>{s.channelTitle}</h2>
            <pre className={styles.description}>{s.description}</pre>
        </section>
    );

export default VideoDetail;