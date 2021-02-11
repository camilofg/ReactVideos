import React from 'react'
import youtube from '../api/youtube'
import SearchBar from './SearchBar'
import VideoDetail from './VideoDetail'
import VideoList from './VideoList'

class App extends React.Component {
    
    state = { videos: [], selectedVideo : null }
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
    }

    onSelectVideo = id => {
        const video = this.state.videos.filter(e => e.id === id);
        this.setState({ selectedVideo: video })
    }

    render() {
        return (
            <div className="ui container">App Component
                <SearchBar onSearchSubmit={this.onSearchSubmit} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList onSelectVideo={this.onSelectVideo} videos={this.state.videos} />
            </div>
        );
    }
}

export default App;