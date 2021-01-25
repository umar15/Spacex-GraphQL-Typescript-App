import React from "react";
import { LaunchProfileQuery } from "../../generated/graphql";
import "./styles.css";

interface Props {
	data: LaunchProfileQuery;
}

const LaunchProfile: React.FC<Props> = ({ data }) => {
	if (!data.launch) {
		return (
			<div>
				<h3>No launch available</h3>
			</div>
		);
	}
	return (
		<div className="LaunchProfile">
			<div className="status">
				<h3>Flight {data.launch.flight_number}</h3>
				{data.launch.launch_success ? (
					<span className="success">Success</span>
				) : (
					<span className="failed">Failed</span>
				)}
			</div>
			<h1 className="title">
				{data.launch.mission_name}
				{data.launch.rocket &&
					`(${data.launch.rocket.rocket_name} | ${data.launch.rocket.rocket_type})`}
			</h1>
			<p className="description">{data.launch.details}</p>
			{data.launch.links && data.launch.links.flickr_images && (
				<div className="image-list">
					{data.launch.links.flickr_images.map((image) =>
						image ? (
							<img
								src={image}
								className="image"
								alt="image"
								key={image}
							/>
						) : null
					)}
				</div>
			)}
		</div>
	);
};

export default LaunchProfile;
