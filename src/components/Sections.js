import React from 'react';
import TemplateOne from './SectionTemplateOne';
import TemplateTwo from './SectionTemplateTwo';

const Sections = props => {
    // store data array of objects fed to props from 'SectionsContainer.js'.
    let data = props.sectionData;

    // loop through data to create a section for each data package in array.
    let sections = data.map((sectionObject, i) => {
        let id = `section-${i + 1}`;
        let data = sectionObject[1];
        let sectionName = sectionObject[0];
        let sectionClasses = `section ${sectionName}`;
        // console.log(data);
        switch (data.template) {
            case 'one':
                return (
                    <div className={sectionClasses} id={id} key={i}>
                        <TemplateOne
                            contentData={data}
                            // title={data.title}
                            // text={data.text}
                            // video={data.vidUrl}
                            id={id}
                            key={i}
                            // templateClasses={templateCustomClass}
                        ></TemplateOne>
                    </div>
                );
            case 'two':
                return (
                    <div className={sectionClasses} id={id} key={i}>
                        <TemplateTwo
                            contentData={data}
                            // title={data.title}
                            // text={data.text}
                            // video={data.vidUrl}
                            id={id}
                            key={i}
                            // templateClasses={templateCustomClass}
                        ></TemplateTwo>
                    </div>
                );
        }
    });
    return sections;
};

export default Sections;
