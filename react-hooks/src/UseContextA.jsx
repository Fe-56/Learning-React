// useContext() - instead of passing values through props down to nested components, we use createContext() and useContext() hook
// this component is a provider component

import { useState, createContext } from "react";
import UseContextB from "./UseContextB";

export const UserContext = createContext();

function UseContextA() {
  const [user, setUser] = useState("fe-56");

  return (
    <div className="box">
      <h2>ComponentA</h2>
      <h3>Hello, {user}</h3>
      <UserContext.Provider value={user}>
        {/* whatever is wrapped within this provider can be shared across nested components? */}
        <UseContextB />
      </UserContext.Provider>
    </div>
  );
}

export default UseContextA;