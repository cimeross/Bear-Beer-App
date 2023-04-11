import { fetchUser } from "../utils/fetchLocalStorageData";

const userInfo = fetchUser();

export const initialstate = {
	user: userInfo,
};
