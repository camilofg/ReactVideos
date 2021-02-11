import React from 'react'

class VideoDetail extends React.Component{
    //{this.props.video.length}
    constructor(props){
        super(props);
    }
    
    render(){
        console.log(this.props);
        if(this.props.video != null){
            alert(this.props.video[0].id.videoId);
        }
        return(
            <div>
               the current video id is: {this.props.video?.id}
            </div>
        );
    }
}

export default VideoDetail;