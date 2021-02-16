import './VideoItem.css'
import React from 'react'

const VideoItem = ({ video, onSelectVideo }) => {

    // onSelectVideo = (event) =>{
    //     onSelectVideo(video[0].id.videoId);
    // }

    return (
        <div className="video-item item" onClick={() => onSelectVideo(video)}>
            <img className="ui image" src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
            <div className="content">
                <div className="header">{video.snippet.title}</div>
            </div>
        </div>
    );
}

/*
class VideoItem extends React.Component {
    //state = {video = null};
    constructor(props){
        super(props);
    }
    onClick = (event) =>{
        this.props.onSelectVideo(this.props.video.id);
    }
    render() {
        return (
            <div className="video-item item" onClick={this.onClick}>
                <img className="ui image" src={this.props.video.snippet.thumbnails.medium.url} alt={this.props.video.snippet.description} />
                <div className="content">
                    <div className="header">{this.props.video.snippet.title}</div>
                </div>
            </div>
        );
    }
}
*/

export default VideoItem;