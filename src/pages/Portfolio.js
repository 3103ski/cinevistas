// Library / Framework
import React from 'react';
// Components
import ScrollSpyPage from '../components/ScrollPageLayout';
// Content JSON located in root dir
import siteContent from '../../site-content.json';

const PortfolioPage = () => {
    const pageContent = siteContent.portfolioPage;
    const sectionsArr = Object.entries(siteContent.portfolioPage.projects);

    return (
        <ScrollSpyPage
            content={pageContent}
            sections={sectionsArr}
        ></ScrollSpyPage>
    );
};

export default PortfolioPage;
