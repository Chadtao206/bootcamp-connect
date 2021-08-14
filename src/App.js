import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { useState } from "react";
import { ContextProvider } from "./util/GlobalState";
import Nav from "./components/nav";
import Main from "./components/main";
import Favs from "./components/favs";

function App() {
  // const [text, setText] = useState("Hello World");

  // const changeText = () => setText(text.repeat(2));

  return (
    <>
      {/* <H1 changeText={changeText} text={text} color={"red"} />
      <H1 text={"World"} color={"blue"} />
      <H1 text={"Customizable"} />
      <H1 text={"Components"} /> */}
      <Router>
        <ContextProvider>
          <Nav />
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/favs">
            <Favs />
          </Route>
        </ContextProvider>
      </Router>
    </>
  );
}

export default App;
