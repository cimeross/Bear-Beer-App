import React from "react";
import Delivery from "../assets/images/delivery-truck.png";
import { useStateValue } from "../context/StateProvider";
import CartContainer from "./CartContainer";

const Service = () => {
	const [{ cartShow }, dispatch] = useStateValue();
	return (
		<div>
			<div className="w-full">
				<h1 className="text-[3.5rem] text-headingColor py-6">Service</h1>
			</div>
			<div
				className="grid grid-cols-1 md:grid-cols-2 gap-1 w-full h-screen"
				id="service"
			>
				<div className="flex flex-col justify-start ">
					<p className="text-lg ">
						Welcome to Bear Beer, where we're dedicated to providing you with a
						seamless and convenient beer ordering and delivery service. Our app
						is user-friendly and designed to make your beer ordering experience
						as easy and efficient as possible.
					</p>
					<br />
					<p className="text-lg ">
						Our delivery service is fast and reliable, ensuring that your beer
						arrives cold and fresh at your doorstep. We use insulated packaging
						and temperature-controlled delivery vehicles to make sure your beer
						stays at the perfect temperature. And with real-time tracking, you
						can always know exactly when your beer will arrive. At Bear Beer,
						we're committed to providing you with the best possible service. Our
						team is always here to answer any questions you may have and to help
						you find the perfect beer for any occasion. So why wait? Download
						our app today and start enjoying the ultimate beer delivery
						experience!
					</p>
				</div>
				<div className="w-full flex items-start justify-center">
					<img className="h-370 mb-10" src={Delivery} alt="" />
				</div>
			</div>
			{cartShow && <CartContainer />}
		</div>
	);
};

export default Service;
