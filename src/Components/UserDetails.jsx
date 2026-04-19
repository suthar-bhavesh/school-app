import React from "react";

export const UserDetailsModal = ({ user, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>User Details</h3>
        <div className="students-details">
          <table>
            <tbody>
              <tr>
                <th>Name:</th>
                <td>{user.name}</td>
              </tr>
              <tr>
                <th>Email:</th>
                <td>{user.email}</td>
              </tr>
              <tr>
                <th>Language:</th>
                <td>{user.language}</td>
              </tr>
              <tr>
                <th>Address:</th>
                <td>{user.address}</td>
              </tr>
              <tr>
                <th>Standard:</th>
                <td>{user.standard}</td>
              </tr>
              <tr>
                <th>Subjects:</th>
                <td>{user.subjects.join(", ")}</td>
              </tr>
              <tr></tr>
            </tbody>
          </table>
          <button className="btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
