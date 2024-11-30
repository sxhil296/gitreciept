import React from "react";
import POS from '../../public/pos.jpg'

interface ReceiptProps {
  userData: any;
}

const Receipt: React.FC<ReceiptProps> = ({ userData }) => {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  if (!userData) return null;
  return (
    //bg-gradient-to-b from-gray-100 to-gray-200
    <div
      className="w-[350px] shadow-lg bg-[url('../../public/pos.jpg')] text-zinc-800 h-[80vh] rounded-md px-4 py-2"
      style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
    >
      <div className="text-center">
        <h2 className="font-bold text-xl">GITHUB RECEIPT</h2>
        <p className="uppercase text-[14px]">{formattedDate}</p>
        <p className="uppercase text-[14px]">ORDER #12</p>
      </div>
      <div>
        <h2 className="text-xl font-bold">CUSTOMER: {userData.name}</h2>
        <p className="text-gray-600">@{userData.login}</p>
      </div>
      <div className="flex flex-col justify-center">
        <div className="flex justify-between items-center">
          <p>REPOSITORIES</p>
          <span>{userData.public_repos}</span>
        </div>
        <div className="flex justify-between items-center">
          <p>STARS EARNED</p>
          <span>{userData.public_repos}</span>
        </div>
        <div className="flex justify-between items-center">
          <p>REPO FORKS</p>
          <span>{userData.public_repos}</span>
        </div>
        <div className="flex justify-between items-center">
          <p>FOLLOWERS</p>
          <span>{userData.followers}</span>
        </div>
        <div className="flex justify-between items-center">
          <p>FOLLOWING</p>
          <span>{userData.following}</span>
        </div>
      </div>
    </div>
  );
};

export default Receipt;
