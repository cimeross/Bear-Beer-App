import I1 from "../assets/images/carlsberg.png";
import F1 from "../assets/images/budweiser-d.png";
import C3 from "../assets/images/amstel.png";
import FI1 from "../assets/images/bavaria.png";

export const beerData = [
	{
		id: 1,
		name: "Carlsberg",
		desc: "Pilsner",
		price: "1.25",
		image: I1,
	},
	{
		id: 2,
		name: "Budweiser",
		desc: "Dark",
		price: "1.05",
		image: F1,
	},
	{
		id: 3,
		name: "Amstel",
		desc: "Pilsner",
		price: "0.95",
		image: C3,
	},
	{
		id: 4,
		name: "Bavaria",
		desc: "Lager",
		price: "1.20",
		image: FI1,
	},
];

export const categories = [
	{
		id: 1,
		name: "Lager",
		urlParamName: "lager",
	},
	{
		id: 2,
		name: "Dark",
		urlParamName: "dark",
	},
	{
		id: 3,
		name: "Wheat",
		urlParamName: "wheat",
	},
	{
		id: 4,
		name: "Non Alc",
		urlParamName: "nonAlc",
	},
	{
		id: 5,
		name: "Radler",
		urlParamName: "radler",
	},
	{
		id: 6,
		name: "Mugs",
		urlParamName: "mugs",
	},
];
