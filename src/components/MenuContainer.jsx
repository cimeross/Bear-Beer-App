import React, { useState } from "react";
import { IoBeerOutline } from "react-icons/io5";
import { categories } from "../utils/data";
import { motion } from "framer-motion";
import RowContainer from "./RowContainer";
import { useStateValue } from "../context/StateProvider";

const MenuContainer = () => {
	const [filter, setfilter] = useState("lager");
	const [{ beerItems }, dispatch] = useStateValue();

	return (
		<section className="w-full my-6" id="menu">
			<div className="w-full flex flex-col items-center justify-center ">
				<p className="text-2xl text-headingColor font-semibold capitalize relative before:absolute before:rounded-lg before:content before:w-16 before:h-1 before:-bottom-2 before:left- before:bg-gradient-to-tr from-textLightOrange to-textDarkOrange transition-all ease-in-out duration-100 mr-auto">
					Choose your Beer
				</p>
				<div className="w-full flex items-center justify-start lg:justify-center  gap-8 py-6 overflow-x-scroll    lg:scrollbar-none">
					{categories &&
						categories.map((category) => (
							<motion.div
								whileTap={{ scale: 0.75 }}
								key={category.id}
								className={`group ${
									filter === category.urlParamName
										? "bg-textDarkOrange"
										: "bg-card"
								} w-24 min-w-[30%] md:min-w-[15%]  lg:min-w-[5%]  h-28  cursor-pointer hover:bg-textLightOrange rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center `}
								onClick={() => setfilter(category.urlParamName)}
							>
								<div
									className={`w-10 h-10 rounded-full shadow-lg ${
										filter === category.urlParamName
											? "bg-white"
											: "bg-textDarkOrange"
									} group-hover:bg-white flex items-center justify-center`}
								>
									<IoBeerOutline
										className={`${
											filter === category.urlParamName
												? "text-headingColor"
												: "text-white"
										} group-hover:text-textColor text-lg`}
									/>
								</div>
								<p
									className={`text-sm font-medium uppercase  ${
										filter === category.urlParamName
											? "text-white"
											: "text-headingColor"
									} group-hover:text-white`}
								>
									{category.name}
								</p>
							</motion.div>
						))}
				</div>
				<div className="w-full ">
					<RowContainer
						flag={false}
						data={beerItems?.filter((e) => e.category === filter)}
					/>
				</div>
			</div>
		</section>
	);
};

export default MenuContainer;
