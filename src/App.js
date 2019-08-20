import React,{Component} from 'react';
import './App.css';
import Searchbar from './component/search/Searchbar'
import Videoshow from './component/videoshow/Videoshow';
import Playlist from './component/playlist/Playlist';
import axios from 'axios';

var Api = 'AIzaSyCSsOPa7RltXlyUTZ51yTSyPba-ZPvzzKI';
var maxresult = 3;
    
class App extends Component {
  state = {
    selectVid: null,
    items: []
  }

  videoSelect = (items) =>{
    this.setState({
      selectVid : items
    })
  }
  
  search = (val) =>{
    var url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${maxresult}&q=${val}&type=video&key=${Api}`;
    axios.get(url)
    .then(res => {
      console.log(res.data.items);
      console.log(val);
      this.setState({
        items: res.data.items,
        selectVid:res.data.items[0]
      });
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() { 
    const {selectVid, items} = this.state;
    return ( 
      <div className='grid-container'>
        <header><Searchbar search={this.search}/></header>
        <main><Videoshow video={selectVid}/></main>
        <aside><Playlist items={items} videoSelect={this.videoSelect}/></aside>
      </div> 
    );
  }
}
export default App;