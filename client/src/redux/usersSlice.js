import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      role: "Admin",
      status: "Active",
      joinDate: "2022-01-15",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      role: "User",
      status: "Active",
      joinDate: "2023-03-10",
    },
    {
      id: 3,
      name: "Bob Johnson",
      email: "bob@example.com",
      role: "User",
      status: "Inactive",
      joinDate: "2021-07-22",
    },
    {
      id: 4,
      name: "Alice Williams",
      email: "alice@example.com",
      role: "Editor",
      status: "Active",
      joinDate: "2020-11-30",
    },
    {
      id: 5,
      name: "Charlie Brown",
      email: "charlie@example.com",
      role: "User",
      status: "Active",
      joinDate: "2022-05-05",
    },
    {
      id: 6,
      name: "David Wilson",
      email: "david@example.com",
      role: "Admin",
      status: "Inactive",
      joinDate: "2019-09-18",
    },
    {
      id: 7,
      name: "Emma Thomas",
      email: "emma@example.com",
      role: "User",
      status: "Active",
      joinDate: "2023-01-25",
    },
    {
      id: 8,
      name: "Frank White",
      email: "frank@example.com",
      role: "Editor",
      status: "Inactive",
      joinDate: "2018-12-11",
    },
    {
      id: 9,
      name: "Grace Hall",
      email: "grace@example.com",
      role: "User",
      status: "Active",
      joinDate: "2021-04-28",
    },
    {
      id: 10,
      name: "Henry King",
      email: "henry@example.com",
      role: "Admin",
      status: "Active",
      joinDate: "2020-08-19",
    },
    {
      id: 11,
      name: "Isabella Scott",
      email: "isabella@example.com",
      role: "User",
      status: "Inactive",
      joinDate: "2022-02-14",
    },
    {
      id: 12,
      name: "Jack Moore",
      email: "jack@example.com",
      role: "Editor",
      status: "Active",
      joinDate: "2017-06-30",
    },
    {
      id: 13,
      name: "Katherine Lee",
      email: "katherine@example.com",
      role: "User",
      status: "Active",
      joinDate: "2023-07-05",
    },
    {
      id: 14,
      name: "Liam Martinez",
      email: "liam@example.com",
      role: "Admin",
      status: "Inactive",
      joinDate: "2019-10-21",
    },
    {
      id: 15,
      name: "Mia Perez",
      email: "mia@example.com",
      role: "User",
      status: "Active",
      joinDate: "2022-12-09",
    },
  ],
  currentPage: 1,
  itemsPerPage: 5,
  editingUser: null,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    deleteUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
    setEditingUser: (state, action) => {
      state.editingUser = action.payload;
    },
    updateUser: (state, action) => {
      const index = state.users.findIndex(
        (user) => user.id === action.payload.id
      );
      if (index !== -1) {
        state.users[index] = action.payload;
      }
      state.editingUser = null;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    addUser: (state, action) => {
      const newId = Math.max(...state.users.map((user) => user.id)) + 1;
      state.users.push({ ...action.payload, id: newId });
    },
  },
});

export const {
  deleteUser,
  setEditingUser,
  updateUser,
  setCurrentPage,
  addUser,
} = usersSlice.actions;

export const selectUsers = (state) => state.users.users;
export const selectPagination = (state) => ({
  currentPage: state.users.currentPage,
  itemsPerPage: state.users.itemsPerPage,
  totalPages: Math.ceil(state.users.users.length / state.users.itemsPerPage),
});
export const selectEditingUser = (state) => state.users.editingUser;

export default usersSlice.reducer;
