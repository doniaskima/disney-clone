import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header";
import "./App.css";
 

function App() {
  return (
    <div className="App">
  
        <Header />
 
            <Login />
  
    </div>
  );
}

export default App;
