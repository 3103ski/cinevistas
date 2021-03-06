// Library/Framework
import React from 'react';

// Component Imports
import Layout from '../components/Layout';
// import Vimeo from '../components/VimeoEmbed';
import VideoLandingSection from '../components/VideoLanding';

// Circle Images
import pic1 from '../assets/images/img-team-square.jpg';
import pic2 from '../assets/images/img-impress-square.jpg';
import pic3 from '../assets/images/img-immersive-square.jpg';

// Company Assets
import logo from '../assets/images/color-cinevistas.png';

// Importing Site Content From JSON
import data from '../../site-content.json';

const IndexPage = () => {
    const videos = data.homePage.videos;
    const content = data.homePage.content;

    return (
        <Layout>
            <section id="wrapper">
                <VideoLandingSection
                    logo={logo}
                    header={content.section1.header}
                    sub={content.section1.sub}
                    videoLink={videos.header}
                ></VideoLandingSection>

                <section id="one" className="wrapper spotlight style1">
                    <div className="inner">
                        <div className="image">
                            <img src={pic1} alt="" />
                        </div>
                        <div className="content">
                            <h2 className="major">Work With A Vision</h2>
                            <p>
                                We can never stress enough to clients how
                                important it is to work with a team that wants
                                to see you vision come to life as bad as you do.
                                We strive to make sure that we provide a virutal
                                experience to live up to what you provide in
                                person.
                            </p>
                        </div>
                    </div>
                </section>

                <section id="two" className="wrapper alt spotlight style2">
                    <div className="inner">
                        <div className="image">
                            <img src={pic2} alt="" />
                        </div>
                        <div className="content">
                            <h2 className="major">Captivate Your Clients</h2>
                            <p>
                                Stress less about how much you need to convince
                                people to visit your location, give them an
                                experience before they ever leave the house.
                            </p>
                        </div>
                    </div>
                </section>

                <section id="three" className="wrapper spotlight style3">
                    <div className="inner">
                        <div className="image">
                            <img src={pic3} alt="" />
                        </div>
                        <div className="content">
                            <h2 className="major">An Immersive Experience </h2>
                            <p>
                                Let potential clients get a full on feel for you
                                business before walking through the door. With
                                our tours, they can not only walk around and
                                explore your place of business, but you can have
                                seamless videos integrated into the tour
                                allowing you to still be the guide. Click below
                                to learn about all the features you can get with
                                your tour, or just feel it out in our portfolio.
                            </p>
                            <a href="/Features" className="special">
                                Learn About Features
                            </a>
                        </div>
                    </div>
                </section>

                <section id="four" className="wrapper alt style1">
                    <div className="inner">
                        <h2 className="major">take a tour</h2>
                        <p>
                            Check out the great work we put together for
                            Champion Porsche's showroom. you can explore this
                            tour right here on our homepage or head to our
                            portfolio to visit this tour and more.
                        </p>
                        <div className="iframe-style-container">
                            <iframe
                                name="Framename"
                                src="https://cinevistatours.com/champion-porsche/"
                                width="400"
                                height="200"
                                frameborder="0"
                                scrolling="auto"
                                class="frame-area"
                            ></iframe>
                            <div className="iframe-overlay"></div>
                        </div>

                        {/* Feature Tours */}
                        {/* <section className="features">
                            <article>
                                <a href="/#" className="image">
                                    <img src={pic7} alt="" />
                                </a>
                                <h3 className="major">Fusce consequat</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing vehicula id nulla dignissim
                                    dapibus ultrices.
                                </p>
                                <a href="/#" className="special">
                                    Learn more
                                </a>
                            </article>
                        </section> */}
                        <ul className="actions">
                            <li>
                                <a href="/Portfolio" className="button">
                                    see more tours
                                </a>
                            </li>
                        </ul>
                    </div>
                </section>
            </section>
        </Layout>
    );
};

export default IndexPage;
