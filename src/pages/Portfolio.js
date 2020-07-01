// Library/Framework
import React from 'react';

// HOC imports
import Layout from '../components/Layout';

// asset imports
import logo from '../assets/images/color-cinevistas.png';
import camBg from '../assets/images/cam-bg.jpg';

// component imports
import VidFeatures from '../components/FeatureVidCard';
import SpyNav from '../components/SpyNav';

// page content can be changed in 'site-content.json' in the root project folder
import siteContent from '../../site-content.json';

const PortfolioPage = () => {
    const projects = Object.entries(siteContent.portfolioPage.projects);
    const greetings = siteContent.portfolioPage.greetings;
    const contactSectionId = `section-${projects.length + 1}`;

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
            <div className="sectionCont" id="scrolling-container">
                <div className="section" id="section-0">
                    <div className="greeting-card">
                        <img className={camBg} src={camBg} alt="" />
                        <div className="greeting-txt">
                            <div className="topLine"></div>
                            <h1>{greetings.header}</h1>
                            <p>{greetings.text}</p>
                        </div>
                    </div>
                </div>
                {projects.map((feature, i) => {
                    let id = `section-${i + 1}`;
                    let f = feature[1];
                    return (
                        <div className="section" id={id} key={i}>
                            <VidFeatures
                                title={f.title}
                                text={f.text}
                                video={f.vidUrl}
                                id={id}
                                key={i}
                            ></VidFeatures>
                        </div>
                    );
                })}
                <div className="section" id={contactSectionId}>
                    <Layout>
                        <div></div>
                    </Layout>
                </div>
            </div>
            <div className="spyNavWrapper">
                <SpyNav
                    navTitle="projects"
                    sections={scrollSpySections}
                    features={projects}
                ></SpyNav>
            </div>
        </div>
    );
};

export default PortfolioPage;
