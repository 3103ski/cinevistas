import React from 'react';
import VideoTemplateOne from './SectionTemplateVid_1';
import VideoTemplateTwo from './SectionTemplateVid_2';

const Sections = props => {
    let data = props.sectionData;
    let sections = data.map((sectionObject, i) => {
        let id = `section-${i + 1}`;
        let data = sectionObject[1];
        let bgClass = sectionObject[0];
        let classes = `section ${bgClass}`;

        switch (data.template) {
            case 'videoOne':
                return (
                    <div className={classes} id={id} key={i}>
                        <VideoTemplateOne
                            title={data.title}
                            text={data.text}
                            video={data.vidUrl}
                            id={id}
                            key={i}
                        ></VideoTemplateOne>
                    </div>
                );
        }
    });
    return sections;
};

export default Sections;
