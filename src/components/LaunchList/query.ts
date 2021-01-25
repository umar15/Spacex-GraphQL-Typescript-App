import gql from "graphql-tag";

export const Launch_List_Query = gql`
	query LaunchList {
		launches {
			flight_number
			mission_name
			launch_year
		}
	}
`;
