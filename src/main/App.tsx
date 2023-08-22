import {useEffect} from "react";
import "../styles/App.css";
import {initAppwrite} from "../management/DatabaseManager.tsx";

function App() {

  useEffect(() => {
    initAppwrite();
  }, [])



  return (
    <div className="container">
      <h1>Welcome to "Where are my books?"!</h1>
    </div>
  );
}

export default App;
