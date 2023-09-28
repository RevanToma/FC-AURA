import { gql, useQuery } from "@apollo/client";
import { GlobalStyles } from "./theme/GlobalStyles";
import Button from "./components/common/Button";
import { ButtonType } from "./components/common/ButtonTypes";

function App() {
  const GET_ALL_USERS = gql`
    query GetAllUsers {
      users {
        id
        name
        email
        password
        skills
        bio
      }
    }
  `;
  const { loading, error, data } = useQuery(GET_ALL_USERS);
  console.log(data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <GlobalStyles />
      <div>
        <Button buttonType={ButtonType.SignIn}>Logga in</Button>
        <h2>All Users</h2>
        <ul>
          {data.users.map((user: any) => (
            <li key={user.id}>
              {user.name} - {user.email}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
