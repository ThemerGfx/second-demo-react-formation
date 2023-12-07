import React, { useEffect, useState } from "react";
import Table from "./Table";
import { useDispatch, useSelector } from "react-redux";
import {
  addUser,
  deleteUser,
  selectUser,
  updateUser,
} from "../redux/actions/userActions";

export default function Form() {
  const updateUserData = useSelector((state) => state.users.updateUserData);

  const dispatch = useDispatch();

  const [userData, setUserData] = useState({
    id: null,
    name: "",
    job: "",
  });

  useEffect(() => {
    setUserData({
      id: updateUserData.id || null,
      name: updateUserData.name || "",
      job: updateUserData.job || "",
    });
  }, [updateUserData]);

  const [showData, setShowData] = useState(false);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  // Handle submit user
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser({ ...userData, id: Date.now() }));
    setUserData({
      name: "",
      job: "",
    });
  };

  // Handle edit user
  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(updateUser(userData));
    setUserData({
      name: "",
      job: "",
    });
  };

  // Handle show table
  const showDataState = () => {
    setShowData(!showData);
  };

  // Handle select user
  const handleSelectUser = (user) => {
    dispatch(selectUser(user));
    setShowData(!showData);
  };

  // Handle delete user
  const handleDelete = (userId) => {
    dispatch(deleteUser(userId));
  };

  return (
    <>
      {!showData ? (
        <div className="p-4 bg-white rounded-lg shadow-md w-1/2">
          <form
            onSubmit={
              Object.keys(updateUserData).length !== 0
                ? handleEdit
                : handleSubmit
            }
          >
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={userData.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="job"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Job
              </label>
              <input
                type="text"
                id="job"
                name="job"
                value={userData.job}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                placeholder="Enter your job"
              />
            </div>
            <div className="flex gap-5">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none hover:bg-green-600"
              >
                {Object.keys(updateUserData).length === 0
                  ? "Submit User"
                  : "Edit User"}
              </button>

              <button
                onClick={showDataState}
                className="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none hover:bg-gray-600"
              >
                Show Data
              </button>
            </div>
          </form>
        </div>
      ) : (
        <Table
          onSelectUser={handleSelectUser}
          onDeleteUser={handleDelete}
          onGoHome={showDataState}
        />
      )}
    </>
  );
}
