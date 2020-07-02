// Library / Framework
import React from 'react';
//Components
import ScrollSpyPage from '../components/ScrollPageLayout';
// Content JSON located in root dir
import siteContent from '../../site-content.json';

const FeaturesPage = () => {
    const pageContent = siteContent.featuresPage;
    const sectionsArr = Object.entries(siteContent.featuresPage.features);
    console.log(pageContent);

    return (
        <ScrollSpyPage
            content={pageContent}
            sections={sectionsArr}
        ></ScrollSpyPage>
    );
};

export default FeaturesPage;
