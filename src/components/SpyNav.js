import React from 'react';
import Scrollspy from 'react-scrollspy';

const SpyNav = props => {
    const ulStyle = {
        // position: 'fixed',
        // right: '0',
        // width: props.width,
        // height: '100vh',
        // backgroundColor: 'black',
        // display: 'flex',
        // flexDirection: 'column',
        // alignItems: 'center',
        // justifyContent: 'center',
        // padding: '6rem 0px 0px 0px',
    };
    console.log(props.sections);
    return (
        <div className="navUl">
            <Scrollspy
                items={props.sections}
                currentClassName="is-current"
                rootEl="#scrolling-container"
                style={ulStyle}
                offset={-250}
            >
                <div className="navTitle">
                    <h1 href="#section-0">{props.navTitle}</h1>
                    <div className="navDivider"></div>
                </div>
                {props.features.map((feature, i) => {
                    let id = `#section-${i + 1}`;
                    return (
                        <li key={i}>
                            <a className="spyNav" href={id}>
                                {feature[1].title}
                            </a>
                        </li>
                    );
                })}
                <li>
                    <a className="spyNav" href="#section-14">
                        CONTACT US
                    </a>
                </li>
            </Scrollspy>
        </div>
    );
};

export default SpyNav;
