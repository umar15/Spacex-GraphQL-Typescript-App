import * as React from "react";
import { useLaunchProfileQuery } from "../../generated/graphql";
import LaunchProfile from "./LaunchProfile";

const LaunchProfileContainer = () => {
	const { data, error, loading } = useLaunchProfileQuery({
		variables: { id: "42" },
	});

	if (loading) {
		return (
			<div>
				<h3>Loading ... </h3>
			</div>
		);
	}

	if (error) {
		return (
			<div>
				<h3>Error ..</h3>
			</div>
		);
	}

	if (!data) {
		return <div>Please select a Launch from panel.</div>;
	}

	return <LaunchProfile data={data} />;
};

export default LaunchProfileContainer;
