import React, { useState } from "react";
import playerDescription from "./playerDescription.jsx";
import playerControls from "./playerControls.jsx";

const miniPlayer = (props) => {
	const [pause, setPlay] = useState(pause);
	const [currentSongindex, setcurrentSongindex] = useState(0);
	const [nextSongIndex, setnextSongIndex] = useState(currentSongindex + 1);
	return (
		<div className="c-player">
			<audio src=""></audio>
			<h4>Playing Now</h4>
			<playerDescription song={props.song} />
			<playerControls />
			<p>
				<strong>Next up:</strong>
				{props.nextSong.title}by {props.nextSong.artist}
			</p>
		</div>
	);
};

export default miniPlayer;
