import React, { useState } from "react";
import PlayerDescription from "./playerDescription.jsx";
import PlayerControls from "./playerControls.jsx";

const MiniPlayer = (props) => {
	const [pause, setPlay] = useState(pause);
	const [currentSongindex, setcurrentSongindex] = useState(0);
	const [nextSongIndex, setnextSongIndex] = useState(currentSongindex + 1);
	return (
		<div className="c-player">
			<audio src=""></audio>
			<h4>Playing Now</h4>
			<div className="c-player--description">
			<div className="description-img">
				<img src={props.song.img_src} alt="" />
			</div>
			<h3 className="description-title">{props.song.title}</h3>
			<h4 className="description-artist">{props.song.artist}</h4>
			</div>

			<playerDescription song={props.song} />
			
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

			<playerControls handleBackward={() => props.handleBackward}} handlePlay={() => {
				console.log("Play")
			}} handleForward={() => {
				console.log("Forward");
			}} />
			<p>
				<strong>Next up:</strong>
				{props.title}by {props.nextSong.artist}
			</p>
		</div>
	);
};

export default miniPlayer;



MiniPlayer.propTypes = {
	handleBackward: propTypes.func,
	handleForward: propTypes.func,
	handlePlay: propTypes.func
}