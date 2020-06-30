import React from 'react';
import Scrollspy from 'react-scrollspy';

const SpyNav = props => {
    // let sectionLink = `#${props.id}`;
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
        <Scrollspy
            items={props.sections}
            currentClassName="is-current"
            rootEl="#scrolling-container"
            style={ulStyle}
            offset={-250}
        >
            <div className="navTitle">
                <h1 href="#section-0">Features</h1>
                <div className="navDivider"></div>
            </div>
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
    );
};

export default SpyNav;
