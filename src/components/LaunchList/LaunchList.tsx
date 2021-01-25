import React from "react";
import { LaunchListQuery } from "../../generated/graphql";
import "./styles.css";

interface Props extends OwnProps {
	data: LaunchListQuery;
}

export interface OwnProps {
	handleIdChange: (newId: number) => void;
}

const LaunchList: React.FC<Props> = ({ data, handleIdChange }) => {
	return (
		<div className="LaunchListContainer">
			<h2 className="header">Launches</h2>
			<ol className="LaunchList">
				{data.launches &&
					data.launches.map((launch, index) => {
						return (
							launch && (
								<li
									className="LaunchItem"
									key={index}
									onClick={() => handleIdChange(launch.flight_number!)}
								>
									{launch.mission_name} ({launch.launch_year})
								</li>
							)
						);
					})}
			</ol>
		</div>
	);
};

export default LaunchList;
