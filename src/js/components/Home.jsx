import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./card";
import Footer from "./Footer";
//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar />
			<div className="container mt-3">
				<Jumbotron />

			</div>
			<div className="container ">
				<div className="row">
					<div className="col-md-3 col-sm-10">
						<Card />
					</div>
					<div className="col-md-3 col-sm-10">
						<Card />
					</div>
					<div className="col-md-3 col-sm-10">
						<Card />
					</div>
					<div className="col-md-3 col-sm-10">
						<Card />
					</div>
				</div>
				<div className="row">
					<div className="col-md-3 col-sm-10">
						<Card />
					</div>
					<div className="col-md-3 col-sm-10">
						<Card />
					</div>
					<div className="col-md-3 col-sm-10">
						<Card />
					</div>
					<div className="col-md-3 col-sm-10">
						<Card />
					</div>
				</div>
			</div>
			<div className="container-fluid">
				<Footer />
			</div>
		</div>


	);
};

export default Home;