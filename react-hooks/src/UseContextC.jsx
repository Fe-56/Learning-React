import { useContext } from "react";
import { UserContext } from "./UseContextA";
import UseContextD from "./UseContextD";

function UseContextC() {
  const user = useContext(UserContext);
  
  return (
    <div className="box">
      <h2>ComponentC</h2>
      <h3>Almost there, {user}</h3>
      <UseContextD />
    </div>
  );
}

export default UseContextC;