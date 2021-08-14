import { useEffect } from "react";
import { getUsers } from "../util/API";
import { useGlobalState } from "../util/GlobalState";
import { SET_USERS } from "../util/actions";
import Card from "./userCard";

const Main = (props) => {
  const [state, dispatch] = useGlobalState();

  useEffect(() => {
    getUsers().then(({ data }) => {
      dispatch({ type: SET_USERS, users: data.results });
    });
  }, [dispatch]);

  return (
    <div
      className="row"
      style={{ height: "100vh", justifyContent: "space-evenly" }}
    >
      {state.users.map((user, i) => (
        <Card key={i} user={user} />
      ))}
    </div>
  );
};

export default Main;
