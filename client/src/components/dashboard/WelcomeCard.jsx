import React from "react";

const WelcomeCard = ({ user }) => {
  return (
    <div className="bg-white shadow rounded-lg p-6 mb-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        Welcome, {user?.name}!
      </h1>
      <p className="text-gray-600">
        You've successfully logged in to the MERN Authentication system.
      </p>
    </div>
  );
};

export default WelcomeCard;
