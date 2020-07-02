import React from 'react';
import Layout from '../components/Layout';
import downIcon from '../assets/images/down-arrow.svg';

// TO
const SectionsContainer = props => {
    const greetings = props.pageContent.greetings
        ? props.pageContent.greetings
        : {
              header: `Welcome to some sections.`,
              text: `If you're seeing this message you don't have a greeting set up in the JSON file. You can find this in the root directory.`,
          };
    const greetHdr = greetings.header;
    const greetP = greetings.text;

    const landingSectionClasses = () => {
        if (props.pageContent) {
            const content = props.pageContent;
            if (content.features) {
                return `section featureGreet`;
            } else if (content.projects) {
                return `section projectsGreet`;
            }
        }
    };

    const contactSectionId = props.sectionCount
        ? `section-${props.sectionCount + 1}`
        : `section-2`;

    return (
        <div className="sections-wrapper" id="scrolling-container">
            <div className={landingSectionClasses()} id="section-0">
                <div className="greeting-section">
                    <div className="greeting-txt">
                        <div className="topLine"></div>
                        <h1>{greetHdr}</h1>
                        <p>{greetP}</p>
                    </div>
                    <img className="downArrow" src={downIcon}></img>
                </div>
            </div>
            {/* Children should be Section Component that iterates content packages from JSON */}
            {props.children}
            <div className="section" id={contactSectionId}>
                <Layout>
                    <div></div>
                </Layout>
            </div>
        </div>
    );
};

export default SectionsContainer;
