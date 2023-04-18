import React from "react";
import About from "../assets/img/background-aboutUs.png";

const AboutUs = () => {
	return (
		<div className="flex flex-col  w-full h-screen" id="about">
			<div>
				<h1 className="text-[3.5rem] text-headingColor py-6">About Us</h1>
			</div>
			<div className="flex flex-col justify-center items-center">
				<p className="text-lg text-left">
					At Bear Beer, we are passionate about delivering the best beer
					experience to our customers. Our team consists of beer enthusiasts who
					have dedicated their time and efforts to curating a wide selection of
					top-quality brews from around the world. We believe that beer should
					be enjoyed hassle-free, which is why we created our easy-to-use app
					that allows you to order your favorite beers and have them delivered
					right to your doorstep.
					<br />
					We believe that beer should be enjoyed hassle-free, which is why we
					created our easy-to-use app. With just a few clicks, you can browse
					our extensive collection of beers and have your favorites delivered
					straight to your door. No more lugging heavy cases of beer from the
					store – we've got you covered.
				</p>
			</div>
			<div className="w-full flex justify-center items-center">
				<img className="" src={About} alt="" />
			</div>
		</div>
	);
};

export default AboutUs;
