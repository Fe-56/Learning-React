// this component is a consumer component

import { useContext } from "react";
import { UserContext } from "./UseContextA";

function UseContextD() {
  const user = useContext(UserContext);

  return (
    <div className="box">
      <h2>ComponentD</h2>
      <h3>Goopdbye, {user}</h3>
    </div>
  );
}

export default UseContextD;