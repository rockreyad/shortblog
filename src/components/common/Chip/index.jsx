import React from "react";

const Chip = ({ label }) => {
  return (
    <p className="bg-indigo-500 w-fit px-1 py-0.5 rounded-md text-white my-1 text-sm">
      {label}
    </p>
  );
};

export default Chip;
