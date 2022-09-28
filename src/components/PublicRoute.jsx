import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import PropTypes from 'prop-types';
import { getCurrentStatus } from '../redux/authUser/authUserSlice';

const PublicRoute = ({
  children,
  restricted = false,
  redirectTo = '/library',
}) => {
  const isLoggedIn = useSelector(getCurrentStatus);
  const shouldRedirect = isLoggedIn && restricted;
  return <>{shouldRedirect ? <Navigate to={redirectTo} /> : children}</>;
};

PublicRoute.propTypes = {
  restricted: PropTypes.bool,
  redirectTo: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
export default PublicRoute;
