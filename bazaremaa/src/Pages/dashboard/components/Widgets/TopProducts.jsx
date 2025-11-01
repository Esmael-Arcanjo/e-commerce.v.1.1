// src/Pages/dashboard/components/Widgets/TopProducts.jsx
import React from "react";

const TopProducts = () => (
  <div className="bg-white p-6 rounded-xl shadow">
    <h2 className="text-lg font-semibold mb-4">Top Products</h2>
    <div className="flex justify-between items-center">
      <div>
        <p className="font-medium">Top</p>
        <p className="text-gray-500">$110</p>
      </div>
      <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-lg font-semibold">
        Total $480
      </div>
    </div>
  </div>
);

export default TopProducts;
