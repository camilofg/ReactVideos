import React from 'react'

class VideoDetail extends React.Component{

    render(){
        return(
            <div>
               the current video id is: {this.props.video.length}
            </div>
        );
    }
}

export default VideoDetail;