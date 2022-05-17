import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/HomePage/Home';
import Navbar from './Pages/Shared/Navbar';
import Login from './Pages/AdminItems/Login';
import Footer from './Pages/Shared/Footer';
import Appointment from './Pages/AppointmentPage/Appointment';
import SignUp from './Pages/AdminItems/SignUp';
import RequireAuth from './Pages/AdminItems/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppointment from './Pages/Dashboard/MyAppointment';
import MyReview from './Pages/Dashboard/MyReview';
import MyHistory from './Pages/Dashboard/MyHistory';
import Users from './Pages/Dashboard/Users';
import RequireAdmin from './Pages/AdminItems/RequireAdmin';
import AddDoctor from './Pages/Dashboard/AddDoctor';
import ManageDoctors from './Pages/Dashboard/ManageDoctors';

function App() {
  return (
    <div className='px-12'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        <Route path="/appointment" element={
          <RequireAuth>
            <Appointment />
          </RequireAuth>
        } />

        {/* xxxxxxxxxxxxxxxxxxx  */}
        <Route path="/dashboard" element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }>
          <Route index element={<MyAppointment />} />
          <Route path="review" element={<MyReview />} />
          <Route path="history" element={<MyHistory />} />

          {/* <Route path="users" element={<Users />} /> */}

          <Route path="users" element={<RequireAdmin> <Users /> </RequireAdmin>} />
          <Route path="addDoctor" element={<RequireAdmin> <AddDoctor /> </RequireAdmin>} />
          <Route path="manageDoctor" element={<RequireAdmin> <ManageDoctors /> </RequireAdmin>} />

        </Route>
        {/* yyyyyyyyyyyyyyyyyyy  */}

        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <ToastContainer />
      <Footer></Footer>
    </div>
  );
}

export default App;
