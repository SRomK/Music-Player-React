import propTypes from "prop-types";
import React, { useState, useEffect } from "react";
import "../../styles/listadoDeCanciones.css";

const ListadoDeCanciones = () => {
	const [songs, setSongs] = useState([]);

	useEffect(() => {
		console.log(`Iniciando mi aplicacion`);
		fetch("https://assets.breatheco.de/apis/sound/songs", {
			method: "GET",
			headers: {
				Accept: "application/json",
			},
		})
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				setSongs(data);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	return (
		<>
			<table className="column">
				<tbody>
					{songs.map((list, i) => (
						<tr key={i}>
							<td className="songsListId">{list.id}</td>
							<td className="songsListName">{list.name}</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
};

export default ListadoDeCanciones;
