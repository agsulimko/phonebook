import { useSelector } from "react-redux";

import { Navigate, useLocation } from "react-router-dom";
import { selectAuth } from "redux/auth/auchSelectors";

const PublicRoute = ({ children }) => {
  const isAuth = useSelector(selectAuth);
  const location = useLocation();
  // console.log('location :>> ', location)
  return !isAuth ? children : <Navigate to={location.state ?? "/contacts"} />;
};

export default PublicRoute;
