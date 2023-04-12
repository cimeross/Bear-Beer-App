import React from "react";
import Delivery from "../assets/img/delivery.png";
import HeroBg from "../assets/img/heroBg.png";
import { foodData } from "../utils/data";

const HomeContainer = () => {
	return (
		<section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full" id="home">
			<div className="flex flex-col items-start justify-start  flex-1 py-2 gap-6">
				<div className="flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full">
					<p className="text-base text-orange-500 font-semibold">
						Bike Delivery
					</p>
					<div className="w-8 h-8 rounded-full overflow-hidden bg-white drop-shadow-xl">
						<img
							src={Delivery}
							className="w-full h-full object-contain"
							alt="delivery"
						/>
					</div>
				</div>
				<p className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor">
					The Fastest Delivery in
					<span className="text-orange-600 text-[3rem] lg:text-[5rem]">
						Your City
					</span>
				</p>
				<p className="text-base text-textColor text-center md:text-left md:w-[80%]">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
					corporis nam beatae architecto impedit, numquam nostrum eum ullam
					saepe ab, vero praesentium voluptates maiores tempora culpa cum.
					Dignissimos, voluptatem iure.
				</p>
				<button
					type="button"
					className="bg-gradient-to-br from-orange-400 to-orange-600 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
				>
					Order Now
				</button>
			</div>
			<div className="flex-1 py-2 flex items-center relative">
				<img
					src={HeroBg}
					className="ml-auto w-full lg:w-auto h-420 lg:h-650"
					alt="heroBg"
				/>
				<div className="w-full h-full absolute flex flex-wrap items-center justify-center left-0 top-0 lg:px-32  py-4 gap-4 drop-shadow-lg">
					{foodData &&
						foodData.map((e) => (
							<div
								key={e.id}
								className="lg:w-190 flex flex-col items-center justify-center  p-2 bg-cardOverlay backdrop-blur-md rounded-3xl"
							>
								<img
									src={e.image}
									alt="icecream"
									className="w-20 lg:w-40 -mt-10 lg:-mt-20"
								/>
								<p className="text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4">
									{e.name}
								</p>
								<p className="text-[12px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3">
									{e.desc}
								</p>
								<p className="text-sm font-semibold text-headingColor">
									<span className="text-red-500">$</span> 5.25
								</p>
							</div>
						))}
				</div>
			</div>
		</section>
	);
};

export default HomeContainer;
