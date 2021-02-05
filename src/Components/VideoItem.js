import './VideoItem.css'
import React from 'react'

const VideoItem = ({ video }) => {
    console.log({ video });
    return (
        <div className="video-item item">
            <img className="ui image" src={video.snippet.thumbnails.medium.url} alt={video.snippet.description} />
            <div className="content">
                <div className="header">{video.snippet.title}</div>
            </div>
        </div>
    );
}
// class ItemList extends React.Component{
//     render(){
//         return(
//             <div>Item List Component</div>
//         );
//     }
// }

export default VideoItem;