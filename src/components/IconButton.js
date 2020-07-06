import React from 'react';

const IconButton = props => {
    const link = props.link ? props.link : null;
    const text = props.text ? props.text : 'text_null';
    const icon = props.icon ? props.icon : null;
    const target = props.blank ? 'blank' : null;

    const pStyle = {
        margin: `${props.iconRight ? '10px' : '10px 30px 10px 15px'}`,
        textAlign: `${props.iconRight ? 'right' : 'left'}`,
        letterSpacing: '0.1rem',
    };
    if (props.listItem) {
        pStyle.margin = '0 10px';
    }
    const iconStyle = {
        width: `${props.smallIcon ? '20px' : '35px'}`,
    };
    const buttonStyle = {
        display: 'flex',
        alignItems: 'center',
    };

    const p = <p style={pStyle}>{text}</p>;
    const im = <img style={iconStyle} src={icon} alt="" />;
    const button = props.iconRight ? (
        <a style={buttonStyle} href={link} className="iconButton">
            {p}
            {im}
        </a>
    ) : (
        <a
            target={target}
            style={buttonStyle}
            href={link}
            className="iconButton"
        >
            {im}
            {p}
        </a>
    );

    return button;
};

export default IconButton;
