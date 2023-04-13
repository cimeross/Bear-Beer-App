import React from "react";
import { RiShoppingBasketLine } from "react-icons/ri";
import { motion } from "framer-motion";

const RowContainer = ({ flag }) => {
	return (
		<div
			className={`w-full my-12  ${
				flag ? "overflow-x-scroll" : "overflow-x-hidden"
			}`}
		>
			<div className=" w-300 md:w-340 h-auto my-12 bg-cardOverlay rounded-lg p-2 backdrop-blur-lg hover:drop-shadow-md">
				<div className="w-full flex items-center justify-between">
					<motion.img
						whileHover={{ scale: 1.2 }}
						src="https://firebasestorage.googleapis.com/v0/b/food-delivery-2ca26.appspot.com/o/Images%2F1681417920458-f10.png?alt=media&token=c2f107a5-90d7-424b-953e-199a48683ae8"
						alt=""
						className="w-40 -mt-8 drop-shadow-2xl"
					/>
					<motion.div
						whileTap={{ scale: 0.75 }}
						className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md"
					>
						<RiShoppingBasketLine className="text-white" />
					</motion.div>
				</div>
				<div className="w-full flex flex-col items-end justify-end">
					<p className="text-textColor font-semibold text-base md:text-lg">
						Watermelon
					</p>
					<p className="mt-1 text-sm text-gray-500">45 calories</p>
					<div className="flex items-center gap-8">
						<p className="text-lg text-headingColor font-semibold">
							<span className="text-sm text-red-500">$</span> 5.25
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RowContainer;
