// Framework / Library
import React from 'react';
// Components
import VimeoVid from './VimeoEmbed';

const SectionWithVidTemplate = props => {
    const d = props.contentData ? props.contentData : {};
    const sectionClasses = d.customClass
        ? `section-content-wrapper ${d.customClass}`
        : `section-content-wrapper`;
    console.log(d);
    return (
        <div className={sectionClasses}>
            <div className="template-one-card card">
                <div className="topLine"></div>
                <h1>{d.title}</h1>
                <p>{d.text}</p>
            </div>

            <div className="template-one-video">
                <VimeoVid vimeoLink={d.vidUrl}></VimeoVid>
            </div>
        </div>
    );
};

export default SectionWithVidTemplate;
