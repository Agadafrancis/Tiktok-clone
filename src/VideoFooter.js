import React from 'react';
import "./VideoFooter.css";
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function VideoFooter() {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>@louistechnology</h3>
        <p>this is some description</p>
         <div className="videoFooter__ticker">
          <MusicNoteIcon 
          className='videoFooter__icon'/>
         </div>

      </div>
    </div> 
  )
}

export default VideoFooter