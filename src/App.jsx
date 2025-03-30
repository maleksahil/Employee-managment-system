import React, { useContext, useEffect, useState } from 'react';
import Login from './components/Auth/Login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { AuthContext } from './context/AuthProvider';

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData,setuserData] = useContext(AuthContext);

  // Retrieve logged-in user from localStorage on page refresh
  

  const handleLogin = (email, password) => {
    if (email === 'admin@me.com' && password === '123') {
      const adminUser = { role: 'admin' };
      setUser(adminUser);
      localStorage.setItem('loggedInUser', JSON.stringify(adminUser));
    } else if (userData) {
      const employee = userData.find((e) => e.email === email && e.password === password);
      if (employee) {
        const employeeUser = { role: 'employee' };
        setUser(employeeUser);
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify(employeeUser));
      } else {
        alert('Invalid credentials');
      }
    } else {
      alert('Invalid credentials');
    }
  };

  // localStorage.clear()

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : null}
      {user?.role === 'admin' ? <AdminDashboard changeUser={setUser} /> : user?.role === 'employee' ? <EmployeeDashboard changeUser={setUser}  data={loggedInUserData}/> : null}
    </>
  );
};

export default App;
