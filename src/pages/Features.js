// Library / Framework
import React from 'react';
// HOCs
import SectionsContainer from '../components/SectionsContainer';
// Assets
import logo from '../assets/images/color-cinevistas.png';
// Components
import Sections from '../components/Sections';
import SpyNav from '../components/SpyNav';
// Content JSON located in root dir
import siteContent from '../../site-content.json';

const FeaturesPage = () => {
    const pageContent = siteContent.featuresPage;
    const sectionsArr = Object.entries(siteContent.featuresPage.features);

    let scrollSpySections = [];
    for (let i = 0; i < sectionsArr.length + 2; i++) {
        let id = `section-${i}`;
        scrollSpySections.push(id);
    }

    return (
        <div className="scrolling-features">
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
                navTitle="features"
                sections={scrollSpySections}
                features={sectionsArr}
            ></SpyNav>
        </div>
    );
};

export default FeaturesPage;
