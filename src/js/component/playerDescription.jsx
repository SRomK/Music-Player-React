import propTypes from "prop-types";
import React, { useState } from "react";

const playerDescription = () => {
	return (
		<div className="c-player--description">
			<div className="description-img">
				<img src={props.song.img_src} alt="" />
			</div>
			<h3 className="description-title">{props.song.title}</h3>
			<h4 className="description-artist">{props.song.artist}</h4>
		</div>
	);
};

export default playerDescription;
