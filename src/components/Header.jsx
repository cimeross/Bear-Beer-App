import React, { useState } from "react";
import LogoBear from "../assets/images/logo-bear.png";
import Avatar from "../assets/images/avatar.png";
import { RiShoppingBasketLine } from "react-icons/ri";
import { MdAdd, MdLogout } from "react-icons/md";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../../firebase.config";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

const Header = () => {
	const firebaseAuth = getAuth(app);
	const provider = new GoogleAuthProvider();

	const [{ user, cartShow, cartItems }, dispatch] = useStateValue();

	const [isMenu, setIsMenu] = useState(false);

	const login = async () => {
		if (!user) {
			const {
				user: { refreshToken, providerData },
			} = await signInWithPopup(firebaseAuth, provider);
			dispatch({
				type: actionType.SET_USER,
				user: providerData[0],
			});
			localStorage.setItem("user", JSON.stringify(providerData[0]));
		} else {
			setIsMenu(!isMenu);
		}
	};

	const logout = () => {
		setIsMenu(false);
		localStorage.clear();

		dispatch({
			type: actionType.SET_USER,
			user: null,
		});
	};

	const showCart = () => {
		dispatch({
			type: actionType.SET_CART_SHOW,
			cartShow: !cartShow,
		});
	};

	return (
		<header className="fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16 bg-primary">
			{/* Desktop & tablet */}
			<div className=" hidden md:flex w-full items-center justify-between">
				<NavLink to="/" className="flex items-center gap-2">
					<img src={LogoBear} className="w-16 object-cover" alt="logo" />
					<p className="text-headingColor lg:text-2xl md:text-xl font-bold ">
						Bear <span className="text-textDarkOrange">Beer</span>
					</p>
				</NavLink>
				<div className="flex items-center lg:gap-8 md:gap-4">
					<motion.ul
						initial={{ opacity: 0, x: 200 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: 200 }}
						className="flex items-center lg:gap-8  md:gap-6"
					>
						<NavLink
							to="/home"
							className="text-base text-headingColor font-medium hover:text-textDarkOrange uppercase duration-100 transition-all ease-out cursor-pointer"
						>
							Home
						</NavLink>
						<NavLink
							to="/menu"
							className="text-base text-headingColor font-medium hover:text-textDarkOrange uppercase duration-100 transition-all ease-out cursor-pointer"
						>
							Menu
						</NavLink>
						<NavLink
							to="/about"
							className="text-base text-headingColor font-medium hover:text-textDarkOrange uppercase duration-100 transition-all ease-out cursor-pointer"
						>
							About Us
						</NavLink>
						<NavLink
							to="/service"
							className="text-base text-headingColor font-medium hover:text-textDarkOrange uppercase duration-100 transition-all ease-out cursor-pointer"
						>
							Service
						</NavLink>
					</motion.ul>
					<div
						className="relative flex items-center justify-center"
						onClick={showCart}
					>
						<RiShoppingBasketLine className="text-textColor text-2xl ml-8 cursor-pointer" />
						{cartItems && cartItems.length > 0 && (
							<div className=" absolute -top-2 -right-2  w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
								<p className="text-xs text-white font-semibold">
									{cartItems.length}
								</p>
							</div>
						)}
					</div>
					<div className="relative">
						<motion.img
							whileTap={{ scale: 0.6 }}
							src={user ? user.photoURL : Avatar}
							alt="userProfile"
							className="w-10 min-w-[40px] h-10 min-h-[40px] shadow-xl cursor-pointer rounded-full"
							onClick={login}
						/>
						{isMenu && (
							<motion.div
								initial={{ opacity: 0, scale: 0.6 }}
								animate={{ opacity: 1, scale: 1 }}
								exit={{ opacity: 0, scale: 0.6 }}
								className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute  right-0 top-12 "
							>
								{user && user.email === "milansuvi@gmail.com" && (
									<NavLink to="/createItem">
										<p
											className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base"
											onClick={() => setIsMenu(false)}
										>
											New Item <MdAdd />
										</p>
									</NavLink>
								)}
								<p
									className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base"
									onClick={logout}
								>
									Logout <MdLogout />
								</p>
							</motion.div>
						)}
					</div>
				</div>
			</div>

			{/* Mobile */}

			<div className="flex items-center justify-between md:hidden w-full">
				<div
					className="relative flex items-center justify-center"
					onClick={showCart}
				>
					<RiShoppingBasketLine className="text-textColor text-2xl  cursor-pointer" />
					{cartItems && cartItems.length > 0 && (
						<div className=" absolute -top-2 -right-2  w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
							<p className="text-xs text-white font-semibold">
								{cartItems.length}
							</p>
						</div>
					)}
				</div>
				<NavLink to="/" className="flex items-center gap-2">
					<img src={LogoBear} className="w-12 object-cover" alt="logo" />
				</NavLink>

				<div className="relative">
					<motion.img
						whileTap={{ scale: 0.6 }}
						src={user ? user.photoURL : Avatar}
						alt="userProfile"
						className="w-8 min-w-[30px] h-8 min-h-[30px] shadow-xl cursor-pointer rounded-full"
						onClick={login}
					/>
					{isMenu && (
						<motion.div
							initial={{ opacity: 0, scale: 0.6 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0.6 }}
							className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute  right-0 top-12 "
						>
							{user && user.email === "milansuvi@gmail.com" && (
								<NavLink to="/createItem">
									<p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base">
										New Item <MdAdd />
									</p>
								</NavLink>
							)}
							<ul className="flex flex-col    ">
								<li
									className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-out cursor-pointer  hover:bg-slate-100 px-4 py-2 "
									onClick={() => setIsMenu(false)}
								>
									Home
								</li>
								<li
									className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-out cursor-pointer hover:bg-slate-100 px-4 py-2 selection:"
									onClick={() => setIsMenu(false)}
								>
									Menu
								</li>
								<li
									className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-out cursor-pointer hover:bg-slate-100 px-4 py-2"
									onClick={() => setIsMenu(false)}
								>
									About Us
								</li>
								<li
									className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-out cursor-pointer hover:bg-slate-100 px-4 py-2"
									onClick={() => setIsMenu(false)}
								>
									Service
								</li>
							</ul>
							<p
								className="p-2 m-2 flex items-center justify-center gap-3 cursor-pointer bg-gray-200 hover:bg-gray-300 rounded-md shadow-md transition-all duration-100 ease-in-out text-textColor text-base"
								onClick={logout}
							>
								Logout <MdLogout />
							</p>
						</motion.div>
					)}
				</div>
			</div>
		</header>
	);
};

export default Header;
