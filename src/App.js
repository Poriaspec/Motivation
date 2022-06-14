import React from "react";
import Auth from "./components/Auth";
import Dashboard from "./components/Dashboard";
import { useUserContext } from "./contexts/UserContext";


function App() {
  const { user, loading, error } = useUserContext();

  return (
    <div className="App">
      {error && <p className="error">{error}</p>}
      {loading ? <h2>Loading...</h2> : <> {user ? <Dashboard /> : <Auth />} </>}
    

    </div>
  );
}

export default App;