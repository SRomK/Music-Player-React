import React, { useState } from "react";
import PropTypes from "prop-types";

const PlayerDescription = (props) => {
	return (
		<div className="c-player--description">
			<div className="description-img">
				<img src={props.song.url} alt="" />
			</div>
			<h3 className="description-title">{props.song.name}</h3>
			<h4 className="description-artist">{props.song.category}</h4>
		</div>
	);
};

export default PlayerDescription;

PlayerDescription.propTypes = {
	song: PropTypes.object,
};
