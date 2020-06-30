import React from 'react';

const VimeoEmbed = props => {
    // const link = props.vimeoLink
    return (
        <iframe
            src={props.vimeoLink}
            frameborder="0"
            allow="accelerometer; autoplay; loop; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            styles="--aspect-ratio: 333 / 640;"
        ></iframe>
    );
};

export default VimeoEmbed;
