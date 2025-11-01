import React from "react";

const colorMap = {
  green: "text-green-500 bg-green-100",
  orange: "text-orange-500 bg-orange-100",
  red: "text-red-500 bg-red-100",
  "light-green": "text-emerald-500 bg-emerald-100",
};

const StatCard = ({ title, value, icon, color }) => {
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm border flex justify-between items-center">
      <div>
        <p className="text-gray-500 text-sm">{title}</p>
        <h2 className="text-2xl font-semibold text-gray-800 mt-1">{value}</h2>
      </div>
      <div className={`text-3xl p-3 rounded-full ${colorMap[color]}`}>
        {icon}
      </div>
    </div>
  );
};

export default StatCard;
