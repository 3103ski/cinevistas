// Library/Framework
import React from 'react';
import Scrollspy from 'react-scrollspy';

// HOC imports
import Layout from '../components/Layout';

// asset imports
import vid1 from '../assets/video/video.mp4';
import logo from '../assets/images/color-cinevistas.png';
import camBg from '../assets/images/cam-bg.jpg';

// component imports
import VidFeatures from '../components/FeatureVidCard';
import SpyNav from '../components/SpyNav';

// page content can be changed in 'site-content.json' in the root project folder
import siteContent from '../../site-content.json';

const FeaturesPage = () => {
    const features = Object.entries(siteContent.featuresPage.features);
    const greetings = siteContent.featuresPage.greetings;
    const contactSectionId = `section-${features.length + 1}`;

    let scrollSpySections = [];
    for (let i = 0; i < features.length + 2; i++) {
        let id = `section-${i}`;
        scrollSpySections.push(id);
    }

    return (
        <div className="scrolling-features">
            <a className="logo" href="/">
                <img src={logo} alt="" />
            </a>
            <div className="section-cont" id="scrolling-container">
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
                {features.map((feature, i) => {
                    let id = `section-${i + 1}`;
                    let f = feature[1];
                    return (
                        // Don't move to VidFeatures Component.
                        // SpyNav must see this section divs rendered here.
                        <div className="section" id={id} key={i}>
                            <VidFeatures
                                title={f.title}
                                text={f.text}
                                video={vid1}
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

            <SpyNav sections={scrollSpySections} features={features}></SpyNav>
        </div>
    );
};

export default FeaturesPage;
