import React, { useEffect } from "react";
import { useLaunchProfileQuery } from "../../generated/graphql";
import LaunchProfile from "./LaunchProfile";

interface OwnProps {
	id: number;
}

const LaunchProfileContainer = ({ id }: OwnProps) => {
	const { data, error, loading, refetch } = useLaunchProfileQuery({
		variables: { id: String(id) },
	});

	useEffect(() => {
		refetch();
	}, [id]);

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
