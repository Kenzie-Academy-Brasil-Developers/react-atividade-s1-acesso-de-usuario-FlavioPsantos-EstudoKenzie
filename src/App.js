import logo from "./logo.svg";
import "./App.css";
import { useState } from "react/cjs/react.development";
import "./Components/RestrictedPage";
import RestrictedPage from "./Components/RestrictedPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  console.log(isLoggedIn)
  const user = "Flávio";
  function Login(){
    return setIsLoggedIn(true)
  }
  function LogOut(){
    return setIsLoggedIn(false)
  }
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <RestrictedPage isLoggedIn={isLoggedIn} user={user} Login={Login} LogOut={LogOut} />
      </div>
    </div>
  );
}

export default App;
