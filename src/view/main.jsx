import React, { useEffect, useState } from "react";

import ListadoDeCanciones from "../js/component/listadoDeCanciones.jsx";
import Buscador from "../js/component/buscador.jsx";
import BarraLateral from "../js/component/barraLateral.jsx";

const Main = () => {
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
			<div className="container">
				<div className="barra">
					<BarraLateral />
				</div>
				<div className="tabla">
					<Buscador />
					{songs.length > 0 ? (
						<ListadoDeCanciones lista={songs} />
					) : null}
				</div>
			</div>
		</>
	);
};

export default Main;
