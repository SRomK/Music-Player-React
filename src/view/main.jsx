import React, { useEffect, useState } from "react";

import ListadoDeCanciones from "../js/component/listadoDeCanciones.jsx";
import Buscador from "../js/component/buscador.jsx";
const Main = () => {
	return (
		<>
			<div className="container">
				<Buscador />
				<ListadoDeCanciones />
			</div>
		</>
	);
};

export default Main;
