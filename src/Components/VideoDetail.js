import React from 'react'

const VideoDetail = ({ video }) => {
    if (!video)
        return <div>Loading...</div>

    const videoUrl = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
        <div>
            <div className='ui embed'>
                <iframe src={videoUrl} title="Video Player"></iframe>
            </div>
            <div className='ui segment'>
                <h4>{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
            <br />

        </div>
    );
};


// class VideoDetail extends React.Component{
//     constructor(props){
//         super(props);
//     }

//     render(){
//         if(this.props.video != null){
//             console.log(this.props.video);
//             alert(this.props.video);
//         }
//         return(
//             <div>
//                 <div>{this.props.video}</div>
//                {/* the current video id is: {this.props.video?.id} */}
//             </div>
//         );
//     }
// }


export default VideoDetail;