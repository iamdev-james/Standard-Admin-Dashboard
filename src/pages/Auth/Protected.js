import { Navigate } from "react-router-dom";
import { useStateContext } from "../../contexts/ContextProvider";

const Protected = ({ children }) => {
  const { isAuthenticated } = useStateContext()
 if (!isAuthenticated) {
 return <Navigate to="/login" replace />;
 }
 return children;
};
export default Protected;