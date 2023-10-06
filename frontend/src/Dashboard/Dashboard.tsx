import { useMutation, useQuery } from "@apollo/client";
import {
  GET_ALL_TEAMMEMBERS,
  UPDATE_USER_REGISTRATION,
} from "../Mutations/Mutations";
import { StatusIndicator } from "./DashboardStyles";

const Dashboard = () => {
  const { data, loading } = useQuery(GET_ALL_TEAMMEMBERS);
  const [changeRegistrationStatus] = useMutation(UPDATE_USER_REGISTRATION);

  const handleStatus = async (id: string, status: string) => {
    try {
      const response = await changeRegistrationStatus({
        variables: {
          input: {
            id,
            registrationStatus: status,
          },
        },
      });
      if (response.data) {
        console.log("Status changed", status);
      }
    } catch (error: string | unknown) {
      console.log(error);
    }
  };
  console.log(data?.teamMembers);
  if (loading) return <p>...Loading</p>;
  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        {data.teamMembers.map((teamMemb: any) => {
          return (
            <div key={teamMemb.id}>
              <StatusIndicator status={teamMemb.registrationStatus} />

              <h4>{teamMemb.name}</h4>
              <button onClick={() => handleStatus(teamMemb.id, "Rejected")}>
                Reject
              </button>
              <button onClick={() => handleStatus(teamMemb.id, "Accepted")}>
                Accept
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
