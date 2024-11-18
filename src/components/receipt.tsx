import React from "react";

interface ReceiptProps {
  userData: any;
}

const Receipt: React.FC<ReceiptProps> = ({ userData }) => {
  if (!userData) return null;
  return (
    <div className="w-[350px] shadow-lg bg-gradient-to-b from-gray-100 to-gray-200 dark text-zinc-800 h-[80vh]">
      <h2 className="text-xl font-bold">{userData.name}</h2>
      <p className="text-gray-600">Username: {userData.login}</p>
      <p className="text-gray-600">Bio: {userData.bio || "No bio available"}</p>
      <p className="text-gray-600">
        Location: {userData.location || "Not specified"}
      </p>
      <p className="text-gray-600">Public Repos: {userData.public_repos}</p>
      <p className="text-gray-600">Followers: {userData.followers}</p>
      <p className="text-gray-600">Following: {userData.following}</p>
      <div className="mt-4">
        <a
          href={userData.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          View Profile
        </a>
      </div>
    </div>
  );
};

export default Receipt;
