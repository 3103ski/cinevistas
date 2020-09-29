import React from 'react';
import Scrollspy from 'react-scrollspy';

import contactIcon from '../assets/images/iconContactLight.svg';

const SpyNav = props => {
    const contactSectionRef = props.features
        ? `#section-${props.features.length + 1}`
        : `#section-2`;
    return (
        <div className="navUl">
            <Scrollspy
                items={props.sections}
                currentClassName="is-current"
                rootEl="#scrolling-container"
                offset={-240}
            >
                <div className="navTitle">
                    <h1 href="#section-0">{props.navTitle}</h1>
                    <div className="navDivider"></div>
                </div>
                {props.features.map((feature, i) => {
                    let id = `#section-${i + 1}`;
                    return (
                        <li className="spyLi" key={i}>
                            <a className="spyLinkFull spyNav" href={id}>
                                {feature[1].title}
                            </a>
                            <a className="spyLinkMobile spyNav" href={id}>
                                {/* {feature[1].title} */}
                            </a>
                        </li>
                    );
                })}
                <li>
                    <a
                        className="spyNav navContactFull"
                        href={contactSectionRef}
                    >
                        CONTACT US
                    </a>
                    {/* <a
                        className="spyNav navContactMobile"
                        href={contactSectionRef}
                    >
                        <img src={contactIcon} alt="" />
                    </a> */}
                </li>
            </Scrollspy>
        </div>
    );
};

export default SpyNav;
