import React, { useEffect } from "react";
import {
	Header,
	MainContainer,
	CreateContainer,
	AboutUs,
	Service,
	MenuContainer,
} from "./components";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useStateValue } from "./context/StateProvider";
import { getAllFoodItems } from "./utils/firebaeFunctions";
import { actionType } from "./context/reducer";

const App = () => {
	const [{ foodItems }, dispatch] = useStateValue();
	const fetchData = async () => {
		await getAllFoodItems().then((data) => {
			dispatch({
				type: actionType.SET_FOOD_ITEMS,
				foodItems: data,
			});
		});
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<AnimatePresence mode="wait">
			<div className="w-screen h-auto flex flex-col bg-primary">
				<Header />
				<main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
					<Routes>
						<Route path="/*" element={<MainContainer />} />
						<Route path="/createItem" element={<CreateContainer />} />
						<Route path="/menu" element={<MenuContainer />} />
						<Route path="/about" element={<AboutUs />} />
						<Route path="/service" element={<Service />} />
					</Routes>
				</main>
			</div>
		</AnimatePresence>
	);
};

export default App;
