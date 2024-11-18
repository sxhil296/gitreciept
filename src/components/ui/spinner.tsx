import React from "react";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center space-x-2">
      <div className="w-6 h-6 border-4 border-t-transparent border-zinc-600 border-solid rounded-full animate-spin"></div>
    </div>
  );
};

export default Spinner;
