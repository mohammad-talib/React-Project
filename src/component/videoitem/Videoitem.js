import React from 'react';
import './Videoitem.css';

const Videoitem =({video, videoSelect}) => {

    
    return (
        <div className="card"> 
        
            <div className="video-item" onClick = {() => videoSelect(video)}>
                <img width="100%" height="220px" alt={video.id} src={video.snippet.thumbnails.medium.url}/>
            </div>

            <div className="video-item">
                <b>{video.snippet.title}</b>
            </div> 

        </div>    
    );
    
}
 
export default Videoitem;