//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/main.css";

//import your own components
import Main from "../../src/view/main.jsx";

//render your react application
ReactDOM.render(<Main />, document.querySelector("#app"));
