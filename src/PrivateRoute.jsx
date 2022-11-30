import { Navigate} from "react-router-dom";

export default function PrivateRoute({element}) {
  const login = localStorage.getItem("login");

  if (login === "true") return element;
  else return <Navigate to="/login" />;
}
