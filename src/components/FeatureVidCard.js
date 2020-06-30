// Framework / Library
import React from 'react';

// Import Components
import VimeoVid from '../components/VimeoEmbed';

const FeatureVideoCard = props => (
    <div className="feature-card">
        <div className="feature-txt">
            <div className="topLine"></div>
            <h1>{props.title}</h1>
            <p>{props.text}</p>
        </div>

        <div className="feature-vid">
            {/* <video
                src={props.video}
                muted={true}
                autoPlay={true}
                loop={true}
            ></video> */}
            <VimeoVid vimeoLink="https://player.vimeo.com/video/433868601?background=1"></VimeoVid>
            {/* <iframe
                src="https://player.vimeo.com/video/433868601"
                width="640"
                height="480"
                frameborder="0"
                allow="autoplay; fullscreen"
                allowfullscreen
            ></iframe> */}
        </div>
    </div>
);

export default FeatureVideoCard;
