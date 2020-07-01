import React from 'react';
import VideoTemplateOne from './SectionTemplateVid_1';

const Sections = props => {
    let data = props.sectionData;
    let sections = data.map((feature, i) => {
        let id = `section-${i + 1}`;
        let f = feature[1];
        let bgClass = feature[0];
        let classes = `section ${bgClass}`;
        return (
            <div className={classes} id={id} key={i}>
                <VideoTemplateOne
                    title={f.title}
                    text={f.text}
                    video={f.vidUrl}
                    id={id}
                    key={i}
                ></VideoTemplateOne>
            </div>
        );
    });
    return sections;
};

export default Sections;
