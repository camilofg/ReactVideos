import React from 'react'
import SearchBar from './SearchBar'
import VideoDetail from './VideoDetail'
import VideoList from './VideoList'

class App extends React.Component{
    onSearchSubmit = term =>{
        console.log(term);
    }
    render(){
        return(
            <div className="ui container">App Component
                <SearchBar onSearchSubmit={this.onSearchSubmit}/>
                <VideoDetail/>
                <VideoList/>
            </div>
        );
    }
}

export default App;