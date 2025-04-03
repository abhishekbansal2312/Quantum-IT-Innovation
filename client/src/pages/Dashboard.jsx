import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectUsers,
  selectPagination,
  selectEditingUser,
  deleteUser,
  setEditingUser,
  setCurrentPage,
} from "../redux/usersSlice";

import WelcomeCard from "../components/dashboard/WelcomeCard";
import EditUserForm from "../components/dashboard/EditUserForm";
import UserManagement from "../components/dashboard/UserManagement";

const Dashboard = () => {
  const { user } = useSelector((state) => state.auth);
  const users = useSelector(selectUsers);
  const { currentPage, itemsPerPage, totalPages } =
    useSelector(selectPagination);
  const editingUser = useSelector(selectEditingUser);
  const dispatch = useDispatch();

  // Calculate pagination
  const indexOfLastUser = currentPage * itemsPerPage;
  const indexOfFirstUser = indexOfLastUser - itemsPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  // Handle edit user
  const handleEditClick = (user) => {
    dispatch(setEditingUser(user));
  };

  // Handle delete user
  const handleDeleteClick = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      dispatch(deleteUser(id));
    }
  };

  // Handle pagination
  const paginate = (pageNumber) => {
    dispatch(setCurrentPage(pageNumber));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <WelcomeCard user={user} />

      {editingUser && <EditUserForm editingUser={editingUser} />}

      <UserManagement
        currentUsers={currentUsers}
        onEditClick={handleEditClick}
        onDeleteClick={handleDeleteClick}
        currentPage={currentPage}
        totalPages={totalPages}
        paginate={paginate}
        indexOfFirstUser={indexOfFirstUser}
        indexOfLastUser={indexOfLastUser}
        totalUsers={users.length}
      />
    </div>
  );
};

export default Dashboard;
