import React from "react";

const StudentDashboard = ({ user }) => {
  return (
    <div className="student-dashboard">
      <div className="dashboard-main-content">
        <div className="panel-title">
          <h2>Student Dashboard</h2>
        </div>
        <div className="student-info">
          <table>
            <tbody>
              <tr>
                <th>Name</th>
                <td>{user.name}</td>
              </tr>
              <tr>
                <th>Email</th>
                <td>{user.email}</td>
              </tr>
              <tr>
                <th>language</th>
                <td>{user.language}</td>
              </tr>
              <tr>
                <th>Address</th>
                <td>{user.address}</td>
              </tr>
              <tr>
                <th>Standard</th>
                <td>{user.standard}</td>
              </tr>
              <tr>
                <th>Subject</th>
                <td>{user.subjects.join(", ")}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
