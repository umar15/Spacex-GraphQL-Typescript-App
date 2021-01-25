import React, { useCallback, useState } from "react";
import "./App.css";
import LaunchesData from "./components/LaunchList/index";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import LaunchProfile from "./components/LaunchProfile";

const client = new ApolloClient({
	uri: "https://spacexdata.herokuapp.com/graphql",
	cache: new InMemoryCache(),
});

function App() {
	const [id, setId] = useState(42);
	const handleIdChange = useCallback((newId) => {
		setId(newId);
	}, []);
	return (
		<ApolloProvider client={client}>
			<div className="App">
				<LaunchesData handleIdChange={handleIdChange} />
				<LaunchProfile id={id} />
			</div>
		</ApolloProvider>
	);
}

export default App;
