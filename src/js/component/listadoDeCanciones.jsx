import propTypes from "prop-types";
import React, { useState, useEffect } from "react";
import "../../styles/listadoDeCanciones.css";
import PropTypes from "prop-types";
import MiniPlayer from "./miniPlayer.jsx";

const ListadoDeCanciones = (props) => {
	return (
		<>
			<table className="column">
				<tbody>
					{props.lista.map((song, i) => (
						<tr key={i}>
							<td className="songsListId">{song.id}</td>
							<td className="songsListName">{song.name}</td>
						</tr>
					))}
				</tbody>
			</table>

			<MiniPlayer song={props.lista[0]} />
		</>
	);
};

export default ListadoDeCanciones;

ListadoDeCanciones.propTypes = {
	lista: PropTypes.array,
};
