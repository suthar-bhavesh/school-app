import React, { useState } from "react";
import users from "../data/users.json";
import { UserDetailsModal } from "./UserDetails";

const AdminDashboard = () => {
  const students = users.filter((u) => u.userType === "student");

  const [search, setSearch] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);

  const filteredStudents = students.filter(
    (s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.email.toLowerCase().includes(search.toLowerCase()) ||
      s.subjects.join(",").toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="dashboard">
      <div className="dashboard-panel">
        <h2 className="heading">Admin Dashboard</h2>

        <input
          className="search"
          name="search"
          id="search"
          placeholder="Search by name or subject"
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Subjects</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredStudents.length > 0 ? (
                filteredStudents.map((student) => (
                  <tr key={student.id}>
                    <td>{student.name}</td>
                    <td>{student.email}</td>
                    <td>{student.subjects.join(", ")}</td>
                    <td>
                      <button
                        className="btn"
                        onClick={() => setSelectedUser(student)}
                      >
                        Details
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="no-data">
                    No records found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {selectedUser && (
          <UserDetailsModal
            user={selectedUser}
            onClose={() => setSelectedUser(null)}
          />
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
