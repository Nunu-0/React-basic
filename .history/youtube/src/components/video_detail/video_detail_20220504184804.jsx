import React from 'react';
import styles from './video_detail.module.css'
const Video_detail = ({video}) => (
        <section className={styles.detail}>
            <iframe className={styles.video} type="text/html" 
            width="100%" height="500px"
            src={`https://www.youtube.com/embed/${video.id}`}
            frameborder="0" allowfullscreen></iframe>
        </section>
    );

export default Video_detail;