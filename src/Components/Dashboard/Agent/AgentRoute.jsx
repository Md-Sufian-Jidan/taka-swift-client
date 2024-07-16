import { BsGraphUp } from "react-icons/bs";
import { MdOutlineUpcoming } from "react-icons/md";
import { NavLink } from "react-router-dom";

const AgentRoute = () => {
    return (
        <nav>
             {/* Statistics */}
             <NavLink
                    to='/dashboard/user-statistics'
                    className={({ isActive }) =>
                        `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                        }`
                    }
                >
                    <BsGraphUp className='w-5 h-5' />

                    <span className='mx-4 font-medium'>Statistics</span>
                </NavLink>

                {/* Add test */}
                <NavLink
                    to='/dashboard/my-appointments'
                    className={({ isActive }) =>
                        `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                        }`
                    }
                >
                    <MdOutlineUpcoming className='w-5 h-5' />
                    <span className='mx-4 font-medium'>My Upcoming Appointments </span>
                </NavLink>
        </nav>
    );
};

export default AgentRoute;