import React, { useState } from "react";
import PlayerDescription from "./playerDescription.jsx";
import PlayerControls from "./playerControls.jsx";
import PropTypes from "prop-types";

const MiniPlayer = (props) => {
	const [pause, setPlay] = useState(pause);
	const [currentSongindex, setcurrentSongindex] = useState(0);
	const [nextSongIndex, setnextSongIndex] = useState(currentSongindex + 1);
	return (
		<div className="c-player">
			<audio src=""></audio>
			<h4>Playing Now</h4>
			{/* <div className="c-player--description">
				<div className="description-img">
					<img src={props.song.url} alt="" />
				</div>
				<h3 className="description-title">{props.song.name}</h3>
				<h4 className="description-artist">{props.song.category}</h4>
			</div> */}

			<PlayerDescription song={props.song} />
			{/* 
			<div className="c-player--controls">
				<button
					onClick={() => props.handleBackward}
					className="skip-btn">
					<FontAwesomeIcon icon={faBackward} />
				</button>
				<button onClick={() => props.handlePlay} className="play-btn">
					<FontAwesomeIcon icon={faPlay} />
				</button>
				<button
					onClick={() => props.handleForward}
					className="skip-btn">
					<FontAwesomeIcon icon={faForward} />
				</button>
			</div> */}

			<PlayerControls
				handleBackward={() => console.log("Backward")}
				handlePlay={() => {
					console.log("Play");
				}}
				handleForward={() => {
					console.log("Forward");
				}}
			/>
			{/* <p>
				<strong>Next up:</strong>
				{props.title}by {props.nextSong.}
			</p> */}
		</div>
	);
};

export default MiniPlayer;

MiniPlayer.propTypes = {
	handleBackward: PropTypes.func,
	handleForward: PropTypes.func,
	handlePlay: PropTypes.func,
};
