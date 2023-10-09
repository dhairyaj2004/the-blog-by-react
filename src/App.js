import Navbar from "./Navbar.js";
import "./App.css";
import Home from "./Home.js";
import Create from "./Create.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BlogDetails from "./BlogDetails.js";
import Notfound from "./Notfound.js";
function App() {
  //dynamic values in templates...
  // const title="The Blogs"
  // const user="Dhiarya Shah
  // const likes=500
  // const link="https://react.dev/learn "
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          {/* <h1>{title}</h1> ("YOU CAN TRY JSX AND UNDERSTAND IT BY COMMENTED CODE")
           <p>Liked by {user} & {likes} more</p> */}
           {/* <a target="_blank" href="react.dev">react</a> */}
          <Switch>
            <Route
              exact
              /*added exact bcz / and /create both matches and giving same page Home.js */ path="/"
            >
              <Home />
            </Route>
            <Route path="/Create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <Notfound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
