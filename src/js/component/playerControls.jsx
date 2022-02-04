import propTypes from "prop-types";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPlay,
	faPause,
	faForward,
	faBackward,
} from "@fortawesome/free-solid-svg-icons";

const playerControls = (props) => {
	return (
		<div className="c-player--controls">
			<button onClick={() => props.handleBackward} className="skip-btn">
				<FontAwesomeIcon icon={faBackward} />
			</button>
			<button onClick={() => props.handlePlay} className="play-btn">
				<FontAwesomeIcon icon={faPlay} />
			</button>
			<button onClick={() => props.handleForward} className="skip-btn">
				<FontAwesomeIcon icon={faForward} />
			</button>
		</div>
	);
};

playerControls.propTypes = {
	handleBackward: propTypes.func,
	handleForward: propTypes.func,
	handlePlay: propTypes.func
}

export default playerControls;
