import React from 'react';
import { Player } from 'video-react';
import "node_modules/video-react/dist/video-react.css";

export default (props) => {
    return (
        <Player
            playsInline
            poster="/assets/poster.png"
            src="https://youtu.be/1J76wN0TPI4"
        />
    );
};