import React from 'react';

const FeatureVideoCard = props => (
    <div className="feature-card">
        <div className="feature-txt">
            <div className="topLine"></div>
            <h1>{props.title}</h1>
            <p>{props.text}</p>
        </div>

        <div className="feature-vid">
            <video
                src={props.video}
                muted={true}
                autoPlay={true}
                loop={true}
            ></video>
        </div>
    </div>
);

export default FeatureVideoCard;
