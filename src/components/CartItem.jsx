import React, { useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { motion } from "framer-motion";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

const CartItem = ({ item }) => {
	const [{ cartItems }, dispatch] = useStateValue();
	const [qty, setQty] = useState(item.qty);

	const handleIncreaseQty = () => {
		setQty(qty + 1);
		let itemIndex = cartItems.findIndex((x) => x.id === item.id);
		let tempItems = [...cartItems];
		tempItems[itemIndex].qty += 1;
		dispatch({
			type: actionType.SET_CARTITEMS,
			cartItems: tempItems,
		});
	};

	const handleDecreaseQty = () => {
		setQty(qty - 1);
		let itemIndex = cartItems.findIndex((x) => x.id === item.id);
		let tempItems = [...cartItems];
		tempItems[itemIndex].qty -= 1;

		if (tempItems[itemIndex].qty === 0) {
			tempItems.splice(itemIndex, 1);
		}
		dispatch({
			type: actionType.SET_CARTITEMS,
			cartItems: tempItems,
		});
	};

	return (
		<div className="w-full p-1 px-2 rounded-lg bg-cartItem flex items-center gap-2">
			<img
				src={item?.imageURL}
				className="w-20 h-20 max-w-[60px] rounded-full object-contain"
				alt=""
			/>

			{/* name section */}
			<div className="flex flex-col gap-2">
				<p className="text-base text-gray-50">{item?.title}</p>
				<p className="text-sm block text-gray-300 font-semibold">
					$ {parseFloat(item?.price * qty).toFixed(2)}
				</p>
			</div>

			{/* button section */}
			<div className="group flex items-center gap-2 ml-auto cursor-pointer">
				<motion.div whileTap={{ scale: 0.75 }} onClick={handleDecreaseQty}>
					<BiMinus className="text-gray-50 " />
				</motion.div>

				<p className="w-5 h-5 rounded-sm bg-cartBg text-gray-50 flex items-center justify-center">
					{qty}
				</p>

				<motion.div whileTap={{ scale: 0.75 }} onClick={handleIncreaseQty}>
					<BiPlus className="text-gray-50 " />
				</motion.div>
			</div>
		</div>
	);
};

export default CartItem;
