import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './assets/Components/LoginForm';
import SignupForm from './assets/Components/SignupForm';
import ForgotPasswordModal from './assets/Components/ForgotPasswordModal';
import ResetPasswordPage from './assets/Components/ResetPassword';
import Dashboard from './assets/Components/Admin-Dashboard';
import ContentDetails from './assets/Components/Admin-ContentDetails';
import ClientDashboard from './assets/Components/Client-Client-Dashboard';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/forgotpassword" element={<ForgotPasswordModal />} />
          <Route path="/resetpassword" element={<ResetPasswordPage/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/contentdetails" element={<ContentDetails/>} />
          <Route path="/clientdashboard" element={<ClientDashboard/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
