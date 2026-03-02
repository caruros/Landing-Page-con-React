import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
//create your first component
const Home = () => {
	return (
		<div className="text-center">


			<div className="container mt-4">
				<Jumbotron />
			</div>
		</>


	);
};

export default Home;