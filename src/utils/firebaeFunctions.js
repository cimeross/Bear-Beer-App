// Saving New Item

import {
	collection,
	doc,
	getDocs,
	orderBy,
	query,
	setDoc,
} from "firebase/firestore";
import { firestore } from "../../firebase.config";

// Saving new Item
export const saveItem = async (data) => {
	await setDoc(doc(firestore, "beerItems", `${Date.now()}`), data, {
		merge: true,
	});
};

// get all beer items
export const getAllBeerItems = async () => {
	const items = await getDocs(
		query(collection(firestore, "beerItems"), orderBy("id", "desc"))
	);

	return items.docs.map((doc) => doc.data());
};
