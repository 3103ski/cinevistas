import React from 'react';
import Layout from '../components/Layout';
import Scrollspy from 'react-scrollspy';

import vid1 from '../assets/video/video.mp4';

import logo from '../assets/images/color-cinevistas.png';
import camBg from '../assets/images/cam-bg.jpg';

const FeaturesPage = () => {
    const ulStyle = {
        position: 'fixed',
        right: '0',
        width: '15vw',
        height: '100vh',
        backgroundColor: 'black',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0',
    };

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
                            <h1>Virtual 360 Tour</h1>
                            <p>
                                Allow your customers to take a completely
                                interactive tour through your entire location.
                                They can browse and purchase products, learn
                                about services, and get a feel what your place
                                feels like. Our Vista Tours are fully immersive
                                and can contain any and all information about
                                your business or location as you'd like.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="section" id="section-1">
                    <div className="feature-card">
                        <div className="feature-txt">
                            <div className="topLine"></div>
                            <h1>Virtual 360 Tour</h1>
                            <p>
                                Allow your customers to take a completely
                                interactive tour through your entire location.
                                They can browse and purchase products, learn
                                about services, and get a feel what your place
                                feels like. Our Vista Tours are fully immersive
                                and can contain any and all information about
                                your business or location as you'd like.
                            </p>
                        </div>

                        <div className="feature-vid">
                            <video
                                src={vid1}
                                muted="true"
                                autoPlay="true"
                                loop="true"
                            ></video>
                        </div>
                    </div>
                </div>

                <div className="section" id="section-2">
                    <div className="feature-card">
                        <div className="feature-txt">
                            <div className="topLine"></div>
                            <h1>TOUR HOTSPOTS</h1>
                            <p>
                                Hot spots allow you to have clickable areas in
                                your tour. These clickable areas can have any
                                icon or picture you’d like. They enable
                                customers to click on a product to display a pop
                                that gives them information, pictures and even
                                video about that particular product. This is
                                useful if you’d like your customers to shop
                                within your tour. Hotspots can also open up a
                                photo album, video or an external link to your
                                website or anywhere else you choose.
                            </p>
                        </div>

                        <div className="feature-vid">
                            <video
                                src={vid1}
                                muted="true"
                                autoPlay="true"
                                loop="true"
                            ></video>
                        </div>
                    </div>
                </div>

                <div className="section" id="section-3">
                    <div className="feature-card">
                        <div className="feature-txt">
                            <div className="topLine"></div>
                            <h1>AUDIO & VIDEO</h1>
                            <p>
                                Hot spots allow you to have clickable areas in
                                your tour. These clickable areas can have any
                                icon or picture you’d like. They enable
                                customers to click on a product to display a pop
                                that gives them information, pictures and even
                                video about that particular product. This is
                                useful if you’d like your customers to shop
                                within your tour. Hotspots can also open up a
                                photo album, video or an external link to your
                                website or anywhere else you choose.
                            </p>
                        </div>

                        <div className="feature-vid">
                            <video
                                src={vid1}
                                muted="true"
                                autoPlay="true"
                                loop="true"
                            ></video>
                        </div>
                    </div>
                </div>

                <div className="section" id="section-4">
                    <div className="feature-card">
                        <div className="feature-txt">
                            <h1>360 TIMELAPSE</h1>
                            <p>We can create 360 timelapse videos.</p>
                        </div>

                        <div className="feature-vid">
                            <video
                                src={vid1}
                                muted="true"
                                autoPlay="true"
                                loop="true"
                            ></video>
                        </div>
                    </div>
                </div>

                <div className="section" id="section-5">
                    <div className="feature-card">
                        <div className="feature-txt">
                            <h1>360 VIDEO</h1>
                            <p>
                                Want a video tour of your location? How about a
                                360 Video that customers can use VR Goggles or
                                click to move the camera angle as the video
                                plays? We can also embed this 360 video within
                                your tour
                            </p>
                        </div>

                        <div className="feature-vid">
                            <video
                                src={vid1}
                                muted="true"
                                autoPlay="true"
                                loop="true"
                            ></video>
                        </div>
                    </div>
                </div>

                <div className="section" id="section-6">
                    <div className="feature-card">
                        <div className="feature-txt">
                            <h1>360 VIDEO HOTSPOTS</h1>
                            <p>
                                Hotspots can also be embedded in 360 video!
                                Useful if we shoot a 360 video for your
                                location. As the guest looks around during the
                                video playing they’ll see onscreen icons that
                                allows them to click and get more information
                                about it.
                            </p>
                        </div>

                        <div className="feature-vid">
                            <video
                                src={vid1}
                                muted="true"
                                autoPlay="true"
                                loop="true"
                            ></video>
                        </div>
                    </div>
                </div>
                <div className="section" id="section-7">
                    <div className="feature-card">
                        <div className="feature-txt">
                            <h1>FULLY BRANDED</h1>
                            <p>
                                Your Tour will come fully branded with your
                                company logo, colors, website link and contact
                                information right inside of it.
                            </p>
                        </div>

                        <div className="feature-vid">
                            <video
                                src={vid1}
                                muted="true"
                                autoPlay="true"
                                loop="true"
                            ></video>
                        </div>
                    </div>
                </div>
                <div className="section" id="section-8">
                    <div className="feature-card">
                        <div className="feature-txt">
                            <h1>VR READY</h1>
                            <p>
                                Our tours are compatible with most VR Goggles
                                like the Oculus Rift and many others.
                            </p>
                        </div>

                        <div className="feature-vid">
                            <video
                                src={vid1}
                                muted="true"
                                autoPlay="true"
                                loop="true"
                            ></video>
                        </div>
                    </div>
                </div>
                <div className="section" id="section-9">
                    <div className="feature-card">
                        <div className="feature-txt">
                            <h1>OFFLINE AND HOSTED</h1>
                            <p>
                                Want your tour delivered to you on a USB Stick
                                or downloadable? We can send your tour directly
                                to you so you can send it wherever you’d like,
                                or just to have a backup copy. You can also have
                                us host your tour so all you have to do is share
                                a link. This will also allow you to embed your
                                tour directly on your website.
                            </p>
                        </div>

                        <div className="feature-vid">
                            <video
                                src={vid1}
                                muted="true"
                                autoPlay="true"
                                loop="true"
                            ></video>
                        </div>
                    </div>
                </div>
                <div className="section" id="section-10">
                    <div className="feature-card">
                        <div className="feature-txt">
                            <h1>EMBED EXTERNAL CONTENT</h1>
                            <p>
                                We can embed a contact form, purchase link,
                                youtube video, google map, and more directly
                                inside your tour. This is the most convenient
                                way to allow your customers to get a full
                                experience right within your tour and interact
                                with your business almost as if they were
                                actually there in person.
                            </p>
                        </div>

                        <div className="feature-vid">
                            <video
                                src={vid1}
                                muted="true"
                                autoPlay="true"
                                loop="true"
                            ></video>
                        </div>
                    </div>
                </div>
                <div className="section" id="section-11">
                    <div className="feature-card">
                        <div className="feature-txt">
                            <h1>PHOTO ALBUM</h1>
                            <p>
                                We also can embed a complete photo album within
                                your tour. Let’s say you’d like us to shoot a
                                few picture for a certain product you offer.
                                Customers can click on that product and see all
                                of the high quality photos of that product.
                            </p>
                        </div>

                        <div className="feature-vid">
                            <video
                                src={vid1}
                                muted="true"
                                autoPlay="true"
                                loop="true"
                            ></video>
                        </div>
                    </div>
                </div>
                <div className="section" id="section-12">
                    <div className="feature-card">
                        <div className="feature-txt">
                            <h1>WORKS ON ALL DEVICES</h1>
                            <p>
                                Our tours work on all devices. iPhone, Android,
                                Mac, Windows, iPad, Surface, etc..
                            </p>
                        </div>

                        <div className="feature-vid">
                            <video
                                src={vid1}
                                muted="true"
                                autoPlay="true"
                                loop="true"
                            ></video>
                        </div>
                    </div>
                </div>
                <div className="section" id="section-13">
                    <div className="feature-card">
                        <div className="feature-txt">
                            <h1>GOOGLE STREET VIEW</h1>
                            <p>
                                Your tour can be published directly to Google
                                Street View. integrated with the official
                                information of your Google listing (i.e. phone,
                                address and reviews). Virtual Tours on the point
                                of first contact, which Google tends to be, are
                                the ultimate tool to familiarize the customer
                                with a business. Plus, they also have proven to
                                positively impact indexation and visibility on
                                search platforms, helping you show up among the
                                first.
                            </p>
                        </div>

                        <div className="feature-vid">
                            <video
                                src={vid1}
                                muted="true"
                                autoPlay="true"
                                loop="true"
                            ></video>
                        </div>
                    </div>
                </div>
                <div className="section" id="section-14">
                    <Layout></Layout>
                </div>
            </div>

            <Scrollspy
                items={[
                    'section-0',
                    'section-1',
                    'section-2',
                    'section-3',
                    'section-4',
                    'section-5',
                    'section-6',
                    'section-7',
                    'section-8',
                    'section-9',
                    'section-10',
                    'section-11',
                    'section-12',
                    'section-13',
                    'section-14',
                ]}
                currentClassName="is-current"
                rootEl="#scrolling-container"
                style={ulStyle}
                offset={-250}
            >
                <h1 className="navTitle" href="#section-0">
                    Features
                </h1>
                <li>
                    <a className="spyNav" href="#section-1">
                        VIRTUAL 360 TOUR
                    </a>
                </li>
                <li>
                    <a className="spyNav" href="#section-2">
                        TOUR HOTSPOTS
                    </a>
                </li>
                <li>
                    <a className="spyNav" href="#section-3">
                        AUDIO & VIDEO
                    </a>
                </li>
                <li>
                    <a className="spyNav" href="#section-4">
                        360 TIMELAPSE
                    </a>
                </li>
                <li>
                    <a className="spyNav" href="#section-5">
                        360 VIDEO
                    </a>
                </li>
                <li>
                    <a className="spyNav" href="#section-6">
                        360 VIDE HOTSPOTS
                    </a>
                </li>
                <li>
                    <a className="spyNav" href="#section-7">
                        FULLY BRANDED
                    </a>
                </li>
                <li>
                    <a className="spyNav" href="#section-8">
                        VR HEADSET READY
                    </a>
                </li>
                <li>
                    <a className="spyNav" href="#section-9">
                        OFFLINE OR HOSTED
                    </a>
                </li>
                <li>
                    <a className="spyNav" href="#section-10">
                        EXTERNAL CONTENT
                    </a>
                </li>
                <li>
                    <a className="spyNav" href="#section-11">
                        PHOTO ALBUM
                    </a>
                </li>
                <li>
                    <a className="spyNav" href="#section-12">
                        ALL DEVICES
                    </a>
                </li>
                <li>
                    <a className="spyNav" href="#section-13">
                        GOOGLE STREET VIEW
                    </a>
                </li>
                <li>
                    <a className="spyNav" href="#section-14">
                        CONTACT US
                    </a>
                </li>
            </Scrollspy>
        </div>
    );
};

export default FeaturesPage;
