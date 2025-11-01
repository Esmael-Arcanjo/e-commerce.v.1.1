// src/Pages/dashboard/components/Widgets/SalesOverview.jsx
import React from "react";

const products = [
  { name: "iPod", time: "25 min ago", price: "+$250" },
  { name: "Mi Phone", time: "5 hour ago", price: "+$589" },
  { name: "Mi TV", time: "3 day ago", price: "+$1292" },
];

const SalesOverview = () => (
  <div className="bg-white p-6 rounded-xl shadow">
    <h2 className="text-lg font-semibold mb-4">Sales Overview</h2>
    <ul className="space-y-4">
      {products.map((item, i) => (
        <li
          key={i}
          className="flex justify-between items-center border-b pb-2 last:border-0"
        >
          <div>
            <p className="font-medium">{item.name}</p>
            <p className="text-sm text-gray-500">{item.time}</p>
          </div>
          <span className="text-green-500 font-semibold">{item.price}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default SalesOverview;
