import React, { useState } from "react";


const Home = () => {

	const [color, setColor] = useState("")

	const changeColor = (color)=>{
		setColor(color)
	}

	return (
		<div className="Caja">
            
			<div
				className={`red ${color == "red" ? "lightOn" : ""}`}
				onClick={()=>changeColor("red")}
			></div>

			<div
			 	className={`yellow ${color == "yellow" ? "lightOn" : ""}`}
				onClick={()=>changeColor("yellow")}
			></div>
			
			<div
			 	className={`green ${color == "green" ? "lightOn" : ""}`}
				onClick={()=>changeColor("green")}
			></div>
		
		</div>
	);
};

export default Home;