import { useGlobalState } from "../util/GlobalState";
import { SET_FAV, GHOST } from "../util/actions";
const Card = (props) => {
  const {
    cell,
    dob: { age },
    email,
    location: { city },
    name: { first, last, title },
    picture: { large },
    i,
  } = props.user;

  const [state, dispatch] = useGlobalState();

  return (
    <>
      <div className="card text-white bg-dark m-3 col-2">
        <div className="card-header">
          <img alt="person face" src={large} />
        </div>
        <div className="card-body">
          <h4 className="card-title">{`${title} ${first} ${last}`}</h4>
          <ul className="card-text" style={{ listStyle: "georgian" }}>
            <li>Age - {age}</li>
            <li>Cell - {cell}</li>
            <li>Email - {email}</li>
            <li>City - {city}</li>
          </ul>
        </div>
        {/* action btns */}
        <button
          onClick={() => dispatch({ type: GHOST, user: i })}
          type="button"
          className="btn btn-danger"
        >
          Ghost
        </button>
        <button
          onClick={() => dispatch({ type: SET_FAV, user: props.user })}
          type="button"
          className="btn btn-success"
        >
          Add Friend
        </button>
      </div>
    </>
  );
};

export default Card;
