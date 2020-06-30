import React from 'react';
import Scrollspy from 'react-scrollspy';

const SpyNav = props => {
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
            {props.features.map((feature, i) => {
                let id = `"#section-${i + 1}"`;
                console.log(props.features);
                return (
                    <li>
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
    );
};

export default SpyNav;
