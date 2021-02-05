import React from 'react'
import VideoItem from './VideoItem'


const VideoList = ({videos}) => {
    //console.log(videos);
    const renderVideo = videos.map((video) => {
        return <VideoItem video={video} />;
    });

    return (
        <div className="ui relaxed divided list" >{renderVideo}</div>
    );
}

// class VideoList extends React.Component{

//     render(){
//         return(
//             <div>
//                 I have {this.props.videos.length} videos
//                 <VideoItem/>
//             </div>
//         );
//     }
//}

export default VideoList;