import React, { useState, useEffect } from "react";
import "../../styles/listadoDeCanciones.css";

const ListadoDeCanciones = () => {
	const [songs, setSongs] = useState([]);

	useEffect(() => {
		// Promise ( async ) =>
		/**
		 * * Pending => Estoy esperando que sea + o -
		 * * Resolved => Todo ha ido bien
		 * * Rejected => Todo ha ido como el culo
		 */

		console.log(`Iniciando mi aplicacion`);
		fetch("https://assets.breatheco.de/apis/sound/songs.mp3", {
			method: "GET",
			headers: {
				Accept: "application/json",
			},
		})
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				setSongs(data.filter((val) => val.id > 80));
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
					{songs.map((p, i) => (
						<tr key={i}>
							<td className="songsList">{p}</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
};

export default ListadoDeCanciones;
