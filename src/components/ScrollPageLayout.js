// Library / Framework
import React from 'react';
// HOCs
import SectionsContainer from '../components/SectionsContainer';
// Assets
import logo from '../assets/images/color-cinevistas.png';
// Components
import SpyNav from '../components/SpyNav';
import Sections from '../components/Sections';
// Content JSON located in root dir
// import siteContent from '../../site-content.json';

const FeaturesPage = props => {
    const pageContent = props.content;
    const sectionsArr = props.sections;

    let scrollSpySections = [];
    for (let i = 0; i < sectionsArr.length + 2; i++) {
        let id = `section-${i}`;
        scrollSpySections.push(id);
    }

    return (
        <div className="scrollSpyPage">
            <a className="logo" href="/">
                <img src={logo} alt="logo" />
            </a>
            <SectionsContainer
                pageContent={pageContent}
                sectionCount={sectionsArr.length}
            >
                <Sections sectionData={sectionsArr}></Sections>
            </SectionsContainer>
            <SpyNav
                navTitle={pageContent.navTitle}
                sections={scrollSpySections}
                features={sectionsArr}
            ></SpyNav>
        </div>
    );
};

export default FeaturesPage;
