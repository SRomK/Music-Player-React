import React from "react";

const Buscador = () => {
	return (
		<div class="navbar navbar-expand-lg navbar-light">
			<div class="container-fluid justify-content-end">
				<form class="d-flex ">
					<input
						class="form-control me-2"
						type="search"
						placeholder="Search"
						aria-label="Search"></input>
					<button class="btn btn-outline-success" type="submit">
						Search
					</button>
				</form>
			</div>
		</div>
	);
};

export default Buscador;
