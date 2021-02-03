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
                videos: response.data.items,
                firstVideo: response.data.items[0]
            });
            console.log(response)
        }

    render() {
        return (
            <div className="ui container">App Component
                <SearchBar onSearchSubmit={this.onSearchSubmit} />
                I have {this.state.videos.length} videos right now
                <VideoDetail video={this.state.firstVideo} />
                <VideoList videos={this.state.videos}  />
            </div>
        );
    }
}

export default App;