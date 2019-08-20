import React,{Fragment} from 'react';
import Videoitem from '../videoitem/Videoitem'
import './Playlist';

const Playlist = ({items, videoSelect}) =>{

    const listItem = items.map((item,i) => <Videoitem videoSelect={videoSelect} key={i} video={item}/>)
    
        return ( 
        <Fragment>
                {listItem}
        </Fragment> 
        );
    
}
 
export default Playlist;