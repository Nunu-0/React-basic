import React from 'react';
import styles from './video_detail.module.css'
const Video_detail = ({video, video :{snippet : s}}) => (
        <section className={styles.detail}>
            <iframe className={styles.video} type="text/html" 
            width="70%" height="500px"
            src={`https://www.youtube.com/embed/${video.id}`}
            frameborder="0" allowfullscreen></iframe>
            <h2>{s.title}</h2>
            <h2>{s.channelTitle}</h2>
            <pre>{s.description}</pre>
        </section>
    );

export default Video_detail;