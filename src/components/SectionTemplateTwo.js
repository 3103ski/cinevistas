// Framework / Library
import React from 'react';
import darkCheck from '../assets/images/darkCheck.png';
import darkArrow from '../assets/images/darkRightArrow.png';

import lightCheck from '../assets/images/whiteCheck.png';
import lightArrow from '../assets/images/lightRightArrow.png';
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

    const check = d.filter == 'dark' ? lightCheck : darkCheck;
    const arrow = d.filter == 'dark' ? lightArrow : darkArrow;

    const makeBoxUL = list => {
        return list.map(li => (
            <li>
                <img src={check} alt="check" />
                {li.liText}
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
            text_missing: check the data object that fed this template component
            and ensure it has a key named 'text' with text value.
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
            <a
                className="visit-btn-container"
                href={d.projectUrl}
                target="_blank"
            >
                <p>See Tour</p>
                <img className="click-out-icon" src={arrow} alt="arrrow" />
            </a>
        </ul>
    ) : (
        <p style={errorTextStyle}>
            text_missing: check the data object that fed this template component
            and ensure it has a key named 'listBoxList' with text value.
        </p>
    );

    return (
        <div className={templateClasses}>
            <div className="info-cards-wrapper">
                <div className="template-two-card card card1">
                    <div className="topLine"></div>
                    {mainBoxTitle}
                    {mainBoxText}
                    <a
                        className="visit-btn-container"
                        href={d.clientUrl}
                        target="_blank"
                    >
                        <p>Visit Website</p>
                        <img
                            className="click-out-icon"
                            src={arrow}
                            alt="arrrow"
                        />
                    </a>
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
