import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./card";
//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar />
			<div className="container mt-4 d-flex">
				<Jumbotron />
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</div>


	);
};

export default Home;