import React from "react";

const Buscador = () => {
	return (
		<div className="navbar navbar-expand-lg navbar-light">
			<div className="container-fluid justify-content-end">
				<form className="d-flex ">
					<input
						className="form-control me-2"
						type="search"
						placeholder="Search"
						aria-label="Search"></input>
					<button className="btn btn-outline-success" type="submit">
						Search
					</button>
				</form>
			</div>
		</div>
	);
};

export default Buscador;
