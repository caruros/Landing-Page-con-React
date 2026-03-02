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
			<div className="container col-md-6 col-sm-12 d-flex mt-4 mx-auto">
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