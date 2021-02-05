import React from 'react'
import youtube from '../api/youtube'
import SearchBar from './SearchBar'
import VideoDetail from './VideoDetail'
import VideoList from './VideoList'

class App extends React.Component {
    
    state = { videos: [] }
    onSearchSubmit = async term => {
        const response = await youtube.get('/search',
            {
                params: {
                    q: term
                }
            });
            this.setState({
                videos: response.data.items
            });
            //console.log(response)
        }

    render() {
        return (
            <div className="ui container">App Component
                <SearchBar onSearchSubmit={this.onSearchSubmit} />
                I have {this.state.videos.length} videos right now
                <VideoDetail video={this.state.videos} />
                <VideoList videos={this.state.videos}  />
            </div>
        );
    }
}

export default App;