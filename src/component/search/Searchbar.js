import React, {Component, Fragment} from 'react';
import './Searchbar.css'
class Searchbar extends Component {
    state={
        val : ""
    }

    change=(e)=>{ 
        this.setState({val:e.target.value})  
        console.log(e.target.value) 
    }

    search=(e) =>{
        const {val} = this.state;
        const {search} = this.props;

        search(val);

        e.preventDefault();
    }

    render() { 
        return (
            <Fragment>
                <form onSubmit={this.search}>
                    <input type="text" value={this.state.val} onChange={this.change} placeholder="Search"/>
                </form>
            </Fragment> 
            );
    }
}
 
export default Searchbar;
