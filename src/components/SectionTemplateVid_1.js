// Framework / Library
import React from 'react';
// Components
import VimeoVid from './VimeoEmbed';
// Assets

const SectionWithVidTemplate = props => (
    <div className="feature-card">
        <div className="feature-txt">
            <div className="topLine"></div>
            <h1>{props.title}</h1>
            <p>{props.text}</p>
        </div>

        <div className="feature-vid">
            <VimeoVid vimeoLink={props.video}></VimeoVid>
        </div>
    </div>
);

export default SectionWithVidTemplate;
