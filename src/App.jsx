import React, { useState } from "react";
import Login from "./components/Login";
import AdminDashboard from "./components/AdminDashboard";
import StudentDashboard from "./components/StudentDashboard";

function App() {
  const [user, setUser] = useState(null);

  if (!user) {
    return <Login onLogin={setUser} />;
  }

  return user.userType === "admin" ? (
    <AdminDashboard user={user} />
  ) : (
    <StudentDashboard user={user} />
  );
}

export default App;
