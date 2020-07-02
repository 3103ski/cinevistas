import React from 'react';
import Scrollspy from 'react-scrollspy';

const SpyNav = props => {
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
