import React,{Fragment} from 'react';
import './Videoshow.css'

const Videoshow =({video}) => {
    
        if(!video) return <div>YouTube Api</div>
        const srcVideo = `https://www.youtube.com/embed/${video.id.videoId}`
        return ( 
        <Fragment>
            <div>
                <div><iframe width="100%" height="700" src={srcVideo} title={video.snippet.title} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
                <div className="ditails">{video.snippet.title}</div>
                <div className="ditails">{video.snippet.description}</div>
            </div>
        </Fragment> 
        );
    
}
 
export default Videoshow;