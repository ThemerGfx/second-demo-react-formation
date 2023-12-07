import React from "react";
import { useSelector } from "react-redux";

export default function Table({ onSelectUser, onDeleteUser }) {
  const users = useSelector((state) => state.users);

  return (
    <div className="flex flex-col gap-2 w-1/2">
      <table className="rounded-lg border-gray-900 shadow-md">
        <thead>
          <tr>
            <th className="border border-gray-600 px-4 py-2">Name</th>
            <th className="border border-gray-600 px-4 py-2">Job</th>
            <th className="border border-gray-600 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.users?.map((user) => (
            <tr key={user.id}>
              <td className="border border-gray-600 px-4 py-2">{user.name}</td>
              <td className="border border-gray-600 px-4 py-2">{user.job}</td>
              <td className="border border-gray-600">
                <div className="py-1 flex justify-center gap-5">
                  <button
                    onClick={() => onSelectUser(user)}
                    className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-blue-500"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDeleteUser(user.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
