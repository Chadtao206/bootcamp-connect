import { createContext, useContext, useReducer } from "react";
import { SET_FAV, GHOST, SET_USERS } from "./actions";
const Context = createContext();
const { Provider } = Context;

const reducer = (state, action) => {
  switch (action.type) {
    case SET_USERS:
      console.log(action.users);
      //receive list of users from api results
      return {
        ...state,
        users: action.users,
      };
    case SET_FAV:
      const favs = [...state.favorites, action.user];
      console.log(favs);
      return { ...state, favorites: favs };
    case GHOST:
      const newUsers = [...state.users];
      newUsers.splice(action.user, 1);
      return { ...state, users: newUsers };
    //return new state
    default:
      return state;
  }
};

const initialState = {
  users: [],
  favorites: [],
};

const ContextProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  //returns a provider component that passes down props

  return <Provider value={[state, dispatch]} {...props} />;
};

const useGlobalState = () => useContext(Context);

export { useGlobalState, ContextProvider };
