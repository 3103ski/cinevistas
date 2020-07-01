// Framework / Library
import React from 'react';

const SectionWithVidTemplateTwo = props => {
    const title = props.title ? <h1>{props.title}</h1> : <h1>title_missing</h1>;
    const text = props.text ? (
        <p>{props.text}</p>
    ) : (
        <p>
            text_missing: section JSON object should include 'text' key with
            text content for value.
        </p>
    );
    const textTwo = props.textTwo ? <p>{props.textTwo}</p> : null;
    return (
        <div className="feature-card">
            <div className="feature-txt">
                <div className="topLine"></div>
                {title}
                {text}
                {textTwo}
            </div>
        </div>
    );
};

export default SectionWithVidTemplateTwo;
