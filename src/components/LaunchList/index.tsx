import React from "react";
import { useLaunchListQuery } from "../../generated/graphql";
import LaunchList, { OwnProps } from "./LaunchList";

const LaunchesData = (props: OwnProps) => {
	const { data, error, loading } = useLaunchListQuery();

	if (loading) {
		return (
			<div>
				<h2>Loading ...</h2>
			</div>
		);
	}

	if (error || !data) {
		return (
			<div>
				<h2>Error ...</h2>
			</div>
		);
	}

	return <LaunchList data={data} {...props} />;
};

export default LaunchesData;
