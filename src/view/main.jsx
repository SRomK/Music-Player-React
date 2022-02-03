import React from "react";
import miniPlayer from "../js/component/miniPlayer.jsx";

//include images into your bundle

//create your first component
const Main = () => {
	return (
		<>
			<div>
				<h1 className="text-center mt-5 colors">
					Music Player with React
				</h1>
				<miniPlayer
					song={song[currentSongIndex]}
					nextSong={songs[nextSongIndex]}
				/>
			</div>
		</>
	);
};

export default Main;
