// Library/Framework
import React from 'react';

// HOC imports
// import Layout from '../components/Layout';
import SectionsContainer from '../components/SectionsContainer';

// asset imports
import logo from '../assets/images/color-cinevistas.png';

// component imports
// import VidFeatures from '../components/FeatureVidCard';
import SpyNav from '../components/SpyNav';
import Sections from '../components/Sections';

// page content can be changed in 'site-content.json' in the root project folder
import siteContent from '../../site-content.json';

const PortfolioPage = () => {
    const pageContent = siteContent.portfolioPage;
    const projects = Object.entries(siteContent.portfolioPage.projects);

    let scrollSpySections = [];

    for (let i = 0; i < projects.length + 2; i++) {
        let id = `section-${i}`;
        scrollSpySections.push(id);
    }

    return (
        <div className="scrolling-features">
            <a className="logo" href="/">
                <img src={logo} alt="logo" />
            </a>
            <SectionsContainer pageContent={pageContent}>
                <Sections sectionData={projects}></Sections>
            </SectionsContainer>
            <SpyNav
                navTitle="projects"
                sections={scrollSpySections}
                features={projects}
            ></SpyNav>
        </div>
    );
};

export default PortfolioPage;
