import React from 'react';

import Vimeo from '../components/VimeoEmbed';

const VideoLanding = props => {
    const [logo, header, sub, video] = [
        props.logo ? <img src={`${props.logo}`} alt="" /> : null,
        props.header ? <h1>{props.header}</h1> : null,
        props.sub ? <h2>{props.sub}</h2> : null,
        props.videoLink ? (
            <Vimeo vimeoLink={props.videoLink}></Vimeo>
        ) : (
            <h1>Video Link Is MISSING. What did you do? Call your developer</h1>
        ),
    ];
    return (
        <div className="video-container">
            <main>{video}</main>
            <div className="video-overlay">
                {logo}
                {header}
                {sub}
            </div>
        </div>
    );
};

export default VideoLanding;
