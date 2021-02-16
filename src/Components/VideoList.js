import React from 'react'
import VideoItem from './VideoItem'


const VideoList = ({ videos, onSelectVideo }) => {

    const renderVideo = videos.map((video) => {
        return <VideoItem key={video.id.videoId} video={video} onSelectVideo={onSelectVideo} />;
    });

    return (
        <div className="ui relaxed divided list">{renderVideo}</div>
    );
}



/*

class VideoList extends React.Component{

    constructor(props){
        super(props);
    }
    onSelectVideo = id => {
        //const video = this.props.videos.filter(e => e.id === id);
        this.props.onSelectVideo(id);
        //this.setState({ video: video })
        //console.log(video);
    }

    render(){
        const renderVideo = this.props.videos.map((video) => {
            return <VideoItem video={video} onSelectVideo={this.onSelectVideo} />;
        });

        return (
        <div className="ui relaxed divided list">{renderVideo}</div>
        );
    }
}
*/

export default VideoList;