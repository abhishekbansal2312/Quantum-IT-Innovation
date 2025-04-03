import React from "react";
import UserTable from "./UserTable";
import Pagination from "./Pagination";

const UserManagement = ({
  currentUsers,
  onEditClick,
  onDeleteClick,
  currentPage,
  totalPages,
  paginate,
  indexOfFirstUser,
  indexOfLastUser,
  totalUsers,
}) => {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800">User Management</h2>
      </div>

      <UserTable
        currentUsers={currentUsers}
        onEditClick={onEditClick}
        onDeleteClick={onDeleteClick}
      />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        paginate={paginate}
        indexOfFirstUser={indexOfFirstUser}
        indexOfLastUser={indexOfLastUser}
        totalUsers={totalUsers}
      />
    </div>
  );
};

export default UserManagement;
