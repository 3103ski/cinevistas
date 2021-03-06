// Framework / Library
import React from 'react';
// Components
import VimeoVid from './VimeoEmbed';
import iconBinoculars from '../assets/images/iconBinocularsLight.svg';
import iconContact from '../assets/images/iconContactLight.svg';
import IconButton from '../components/IconButton';

const SectionWithVidTemplate = props => {
    const d = props.contentData ? props.contentData : {};
    const sectionClasses = d.customClass
        ? `section-content-wrapper ${d.customClass} wider`
        : `section-content-wrapper wider`;
    // console.log(d);
    return (
        <div className={sectionClasses}>
            <div className="template-one-card">
                <div className="topLine"></div>
                <h1>{d.title}</h1>
                <p style={{ marginBottom: '.75rem' }}>{d.text}</p>
                <p
                    style={{
                        fontSize: '0.8rem',
                        padding: '10px 20px',
                        borderTop: 'solid 1px white',
                    }}
                >
                    {d.textTwo}
                </p>
                <div className="twoButtons">
                    <IconButton
                        text="See Tours"
                        icon={iconBinoculars}
                        link="/Portfolio"
                        alt="See Tours"
                    ></IconButton>
                    <IconButton
                        link="/Features#section-14"
                        text="Reach Out"
                        icon={iconContact}
                        alt=""
                    ></IconButton>
                </div>
            </div>

            <div className="template-one-video">
                <VimeoVid vimeoLink={d.vidUrl}></VimeoVid>
            </div>
        </div>
    );
};

export default SectionWithVidTemplate;
