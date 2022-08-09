import { Navigate } from "react-router-dom";
import { useStateContext } from "../../contexts/ContextProvider";

const Protected = ({ children }) => {
  const { username } = useStateContext()
 if (!username) {
 return <Navigate to="/login" replace />;
 }
 return children;
};
export default Protected;