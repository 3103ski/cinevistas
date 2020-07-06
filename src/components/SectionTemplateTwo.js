// Framework / Library
import React from 'react';

import darkCheck from '../assets/images/iconCheckDark.png';
import lightCheck from '../assets/images/iconCheckLight.png';
// import darkArrow from '../assets/images/iconRightArrowDark.png';
// import lightArrow from '../assets/images/iconRightArrowLight.png';
import darkGlobe from '../assets/images/iconGlobeDark.svg';
import lightGlobe from '../assets/images/iconGlobeLight.svg';
import lightQuestionMark from '../assets/images/iconQuestionMarkLight.svg';
import darkQuestionMark from '../assets/images/iconQuestionMarkDark.svg';
import lightBinoculars from '../assets/images/iconBinocularsLight.svg';
import darkBinoculars from '../assets/images/iconBinocularsDark.svg';

// components

import IconButton from '../components/IconButton';

// import bodyMovin from 'bodymovin';
/**
 *
 * This template intention is to have a full screen high res image in the background and then a card with some text. You can let the card position at default, or you can add the customClass 'full' to the JSON object then position card with left and top margin in '_sectionTemplate.scss' (see that file for more instructions)
 *
 * Add customClass 'dark' or 'light' depending on the background image you add to help text readability
 *
 */

const SectionTemplateTwo = props => {
    const d = props.contentData ? props.contentData : {};

    let templateClasses = d.customClasses
        ? `${d.customClasses} section-content-wrapper`
        : `section-content-wrapper`;

    // styling for text served up if title or text is missing
    const errorTextStyle = {
        color: 'red',
        fontSize: '2rem',
        lineHeight: '2rem',
        fontWeight: 'bold',
    };

    const globe = d.filter == 'dark' ? lightGlobe : darkGlobe;
    const check = d.filter == 'dark' ? lightCheck : darkCheck;
    const qMark = d.filter == 'dark' ? lightQuestionMark : darkQuestionMark;
    const binoculars = d.filter == 'dark' ? lightBinoculars : darkBinoculars;

    const makeBoxUL = list => {
        return list.map(li => (
            <li>
                <IconButton
                    listItem
                    smallIcon
                    icon={check}
                    text={li.liText}
                ></IconButton>
            </li>
        ));
    };

    // ensure that the template input is met for title and text.
    const mainBoxTitle = d.title ? (
        <h1>{d.title}</h1>
    ) : (
        <h1 style={errorTextStyle}>title_missing</h1>
    );

    const mainBoxText = d.text ? (
        <p>{d.text}</p>
    ) : (
        <p style={errorTextStyle}>
            text_missing: check data fed to tempalte component
        </p>
    );

    const listBoxTitle = d.listBoxTitle ? (
        <h1>{d.listBoxTitle}</h1>
    ) : (
        <p style={errorTextStyle}>title_missing: add 'listBoxTitle'</p>
    );

    const listBoxList = d.listBoxList ? (
        <ul>
            {makeBoxUL(d.listBoxList)}
            <div className="visit-btn-container">
                <IconButton
                    iconRight
                    text="Learn About Features"
                    link="/Features"
                    icon={qMark}
                    alt="Question Mark"
                ></IconButton>
            </div>
        </ul>
    ) : (
        <p style={errorTextStyle}>
            list_missing; check data feeding section template.
        </p>
    );
    console.log(d);

    return (
        <div className={templateClasses}>
            <div className="info-cards-wrapper">
                <div className="template-two-card card card1">
                    <div className="topLine"></div>
                    {mainBoxTitle}
                    {mainBoxText}
                    <div className="horizontalBtnGroup">
                        <IconButton
                            icon={globe}
                            alt="globe"
                            blank
                            text="Visit Website"
                            link={d.clientUrl}
                        ></IconButton>
                        <IconButton
                            icon={binoculars}
                            alt="See Tour"
                            blank
                            text="See Tour"
                            link={d.projectUrl}
                        ></IconButton>
                    </div>
                </div>
                <div className="template-two-card card card2">
                    {listBoxTitle}
                    <div className="topLine"></div>
                    {listBoxList}
                </div>
            </div>
        </div>
    );
};

export default SectionTemplateTwo;
