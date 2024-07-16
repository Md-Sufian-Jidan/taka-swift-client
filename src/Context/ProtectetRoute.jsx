import PropTypes from 'prop-types'
import { Navigate, useLocation } from 'react-router-dom'
import useAuth from '../Hooks/useAuth'

const ProtectetRoute = ({ children }) => {
    const { user, loading } = useAuth()
    const location = useLocation();
    const from = location;

    if (loading) return <div>loading...</div>

    if (user) return children;
    return <Navigate to='/login' state={{ from }} replace='true' />
}

ProtectetRoute.propTypes = {
    children: PropTypes.element,
};
export default ProtectetRoute;