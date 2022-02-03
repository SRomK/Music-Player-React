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
				setSongs([]);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	return (
		<>
			<h1>Songs List</h1>
			<table>
				<tbody>
					{songs.map((list, i) => (
						<tr key={i}>
							<td className="songsList">{list}</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
};

export default ListadoDeCanciones;
