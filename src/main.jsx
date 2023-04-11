import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { StateProvider } from "./context/StateProvider";
import { initialstate } from "./context/initialState";
import reducer from "./context/reducer";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Router>
			<StateProvider initialState={initialstate} reducer={reducer}>
				<App />
			</StateProvider>
		</Router>
	</React.StrictMode>
);
