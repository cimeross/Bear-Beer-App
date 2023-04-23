import React from "react";
import Delivery from "../assets/images/delivery-truck.png";
import HomeBg from "../assets/images/background.png";
import { beerData } from "../utils/data";

const HomeContainer = () => {
	return (
		<section className="grid grid-cols-1 md:grid-cols-2 gap-1 w-full" id="home">
			<div className="flex flex-col items-start justify-start  flex-1 py-2 gap-6">
				<div className="flex items-center gap-2 justify-center bg-transparent px-4 py-1 rounded-full shadow-lg">
					<p className="text-base text-textDarkOrange font-semibold">
						Fast Delivery
					</p>
					<div className="w-8 h-8 flex justify-center items-center rounded-full overflow-hidden bg-white drop-shadow-xl">
						<img
							src={Delivery}
							className="w-[80%] h-full object-contain"
							alt="delivery"
						/>
					</div>
				</div>
				<p className="text-[2.5rem] lg:text-[3.8rem] leading-[1.1]  md:leading-normal font-bold tracking-normal text-headingColor">
					From the mountains to your door,{" "}
					<span className="text-textDarkOrange text-[3rem] lg:text-[4.2rem]">
						Bear Beer{" "}
					</span>
					brings the roar!
				</p>
				<p className="text-base text-textColor text-center md:text-left md:w-[80%]">
					Welcome to Bear Beer, where we're passionate about bringing the best
					beer experience right to your doorstep. Our team of beer enthusiasts
					is dedicated to curating a wide selection of top-quality brews from
					around the world.
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
					src={HomeBg}
					className="ml-auto w-full lg:w-auto h-420 lg:h-650 rounded-2xl"
					alt="heroBg"
				/>
				<div className="w-full h-full absolute flex flex-wrap items-center justify-center left-0 top-0   py-4 gap-6 drop-shadow-lg">
					{beerData &&
						beerData.map((e) => (
							<div
								key={e.id}
								className="2xl:w-275 xl:w-220 flex flex-col  items-center justify-center  p-2 bg-cardOverlay backdrop-blur-md rounded-3xl"
							>
								<img
									src={e.image}
									alt="beer"
									className="w-28 xl:w-44 lg:w-32 -mt-10 lg:-mt-30"
								/>
								<p className="text-base lg:text-xl font-semibold text-headingColor mt-2 lg:mt-4">
									{e.name}
								</p>
								<p className="text-[12px] lg:text-sm text-textDarkOrange font-semibold my-1 lg:my-3">
									{e.desc}
								</p>
								<p className="text-sm font-semibold text-headingColor">
									<span className="text-red-500">$</span> {e.price}
								</p>
							</div>
						))}
				</div>
			</div>
		</section>
	);
};

export default HomeContainer;
