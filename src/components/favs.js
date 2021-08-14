import { useGlobalState } from "../util/GlobalState";
import Card from "./userCard";

const Main = (props) => {
  const [state, dispatch] = useGlobalState();
  console.log(state);
  return (
    <div
      className="row"
      style={{ height: "100vh", justifyContent: "space-evenly" }}
    >
      {state.favorites.map((user, i) => (
        <Card key={i} user={user} />
      ))}
    </div>
  );
};

export default Main;
