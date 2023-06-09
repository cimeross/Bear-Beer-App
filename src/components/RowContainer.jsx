import React, { useEffect, useRef, useState } from "react";
import { RiShoppingBasketLine } from "react-icons/ri";
import { motion } from "framer-motion";
import NotFound from "../assets/images/NotFound.svg";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

const RowContainer = ({ flag, data, scrollValue }) => {
	const rowContainer = useRef();

	const [items, setItems] = useState([]);

	const [{ cartItems }, dispatch] = useStateValue();

	const addToCart = (item) => {
		const alreadyInCart = cartItems.some((cartItem) => cartItem.id === item.id);
		if (!alreadyInCart) {
			setItems([...items, item]);
			dispatch({
				type: actionType.SET_CARTITEMS,
				cartItems: [...cartItems, item],
			});
			localStorage.setItem("cartItems", JSON.stringify([...cartItems, item]));
		}
	};

	useEffect(() => {
		rowContainer.current.scrollLeft += scrollValue;
	}, [scrollValue]);

	return (
		<div
			ref={rowContainer}
			className={`w-full flex items-center gap-3  my-12 scroll-smooth  ${
				flag
					? "overflow-x-scroll scrollbar-none"
					: "overflow-x-hidden flex-wrap justify-center"
			}`}
		>
			{data && data.length > 0 ? (
				data.map((item) => (
					<div
						key={item?.id}
						className="w-225 h-[175px] min-w-[245px] md:w-300 md:min-w-[300px]  bg-cardOverlay rounded-lg py-2 px-2 md:px-4 my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative"
					>
						<div className="w-full flex items-center justify-between ">
							<motion.div
								className="w-[8rem] h-[8rem] md:w-[10rem] md:h-[10rem] -mt-8 drop-shadow-2xl"
								whileHover={{ scale: 1.2 }}
							>
								<img
									src={item?.imageURL}
									alt=""
									className="w-full h-full object-contain"
								/>
							</motion.div>
							<motion.div
								whileTap={{ scale: 0.75 }}
								className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md -mt-8"
								onClick={() => addToCart(item)}
							>
								<RiShoppingBasketLine className="text-white" />
							</motion.div>
						</div>

						<div className="w-full flex flex-col items-end justify-end -mt-8">
							<p className="text-textColor font-semibold text-base md:text-lg">
								{item?.title}
							</p>
							<p className="mt-1 text-sm text-gray-500">{item?.alc} Alc</p>
							<div className="flex items-center gap-8">
								<p className="text-lg text-headingColor font-semibold">
									<span className="text-sm text-red-500">$</span> {item?.price}
								</p>
							</div>
						</div>
					</div>
				))
			) : (
				<div className="w-full flex flex-col items-center justify-center">
					<img src={NotFound} className="h-340" />
					<p className="text-xl text-headingColor font-semibold my-2">
						Items Not Available
					</p>
				</div>
			)}
		</div>
	);
};

export default RowContainer;
