import React from "react";
import "./App.css";
import LaunchesData from "./components/LaunchList/index";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import LaunchProfile from "./components/LaunchProfile";

const client = new ApolloClient({
	uri: "https://spacexdata.herokuapp.com/graphql",
	cache: new InMemoryCache(),
});

function App() {
	return (
		<ApolloProvider client={client}>
			<div className="App">
				<LaunchesData />
				<LaunchProfile />
			</div>
		</ApolloProvider>
	);
}

export default App;
