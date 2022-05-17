import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Outlet, Link } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    // console.log(admin);
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard_sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* <!-- Page content here start--> */}
                <h2 className='text-2xl font-bold text-black-400 text-center mt-7'> Welcome to Dashboard </h2>
                <Outlet></Outlet>
                {/* <!-- Page content here end --> */}
                {/* <label htmlFor="dashboard_sidebar" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}

            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard_sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard'> My Appointment </Link></li>
                    <li><Link to='/dashboard/review'> My Reviews </Link></li>
                    <li><Link to='/dashboard/history'> My History </Link></li>
                    {/* <li><Link to={'/dashboard/users'}> All Users </Link></li> */}
                    {admin && <>
                        <li><Link to='/dashboard/users'> All Users </Link></li>
                        <li><Link to='/dashboard/addDoctor'> Add a new Doctor </Link></li>
                        <li><Link to='/dashboard/manageDoctor'> Manage Doctors </Link></li>
                    </>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;