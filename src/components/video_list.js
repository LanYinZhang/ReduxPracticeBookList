import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = ({videos, onSelectVideo}) => {
    const videoItems = videos.map((video) => {
       return <VideoListItem key = {video.etag} video = {video} onSelectVideo = {onSelectVideo} />
    });
    return (
        <div>
            <ul className="col-md-4 list-group">
                {videoItems}
            </ul>
        </div>
    );
}
export default VideoList;