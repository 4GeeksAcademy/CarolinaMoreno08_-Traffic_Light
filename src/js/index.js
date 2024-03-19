//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import Trafficlight from "./component/trafficlightproyect.jsx";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components


const traficLight= () =>{
    return (
<h1>hello</h1>
    )
}

//render your react application
ReactDOM.render(<Trafficlight />, document.querySelector("#app"));
