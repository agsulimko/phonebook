import { useSelector } from "react-redux";

import { Navigate, useLocation } from "react-router-dom";
import { selectAuth } from "redux/auth/auchSelectors";

const PrivateRoute = ({ children }) => {
  const isAuth = useSelector(selectAuth);
  const location = useLocation();

  return isAuth ? children : <Navigate to="/login" state={location} />;
};

export default PrivateRoute;
