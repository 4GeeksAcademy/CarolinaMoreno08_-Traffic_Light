import React, {useState} from "react"


const Trafficlight = () => {
	
	const [lightrboxShadow, setLightrboxShadow] = useState("")
	const [lightoboxShadow, setLightoboxShadow] = useState("")
	const [lightgboxShadow, setLightgboxShadow] = useState("")
	

    function lightr (){
        console.log ("back");

		if (lightrboxShadow == "0 0 10px 20px #FFFF99"){
			setLightrboxShadow("")
		}else{
			setLightrboxShadow ("0 0 10px 20px #FFFF99")
			setLightoboxShadow("")
			setLightgboxShadow("")
		}	
    }

	function lighto (){
        console.log ("back");

		if (lightoboxShadow == "0 0 10px 20px #FFFF99"){
			setLightoboxShadow("")
		}else{
			setLightoboxShadow ("0 0 10px 20px #FFFF99")
			setLightrboxShadow("")
			setLightgboxShadow("")
		}	
    }

	function lightg (){
        console.log ("back");

		if (lightgboxShadow == "0 0 10px 20px #FFFF99"){
			setLightgboxShadow("")
		}else{
			setLightgboxShadow ("0 0 10px 20px #FFFF99")
			setLightrboxShadow("")
			setLightoboxShadow("")
		}	
    }


	return (
		<>
		<div className="cable"></div>
		<div className="semaforo">
			<div className="circle" style = {{backgroundColor: "red", boxShadow: lightrboxShadow}} onClick={lightr}></div>
			<div className="circle" style = {{backgroundColor: "orange", boxShadow: lightoboxShadow}} onClick={lighto}></div>
			<div className="circle" style = {{backgroundColor: "green", boxShadow: lightgboxShadow}} onClick={lightg}></div>
		</div>
		</>
	);
};

export default Trafficlight