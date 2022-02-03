import React, { useEffect, useState } from "react";

import ListadoDeCanciones from "../js/component/listadoDeCanciones.jsx";
import Buscador from "../js/component/buscador.jsx";
import BarraLateral from "../js/component/barraLateral.jsx";

const Main = () => {
	return (
		<>
			<div className="container">
				<div className="barra">
					<BarraLateral />
				</div>
				<div className="tabla">
					<Buscador />
					<ListadoDeCanciones />
				</div>
			</div>
		</>
	);
};

export default Main;
