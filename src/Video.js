import React, { useRef, useState } from 'react';
import "./Video.css";
import ReactPlayer from 'react-player';
import VideoFooter from './VideoFooter';

function Video() {
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);

    const handleVideoPress = () => {
        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
        } else{
            videoRef.current.play();
            setPlaying(true);
        }


    }

  return ( <div className="video">
    <ReactPlayer onClick={handleVideoPress} className='video__player' loop height="100vh" ref={videoRef} url='https://www.youtube.com/watch?v=HgzftD4L1c8&t=20s' />
       
    <VideoFooter />
    
    </div>
  )
}


export default Video