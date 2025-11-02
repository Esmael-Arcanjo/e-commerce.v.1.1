// src/Pages/dashboard/components/Charts/OrderSummaryChart.jsx
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { month: "Feb", Online: 40, Offline: 20 },
  { month: "Mar", Online: 60, Offline: 30 },
  { month: "Apr", Online: 80, Offline: 40 },
  { month: "May", Online: 75, Offline: 35 },
  { month: "Jun", Online: 90, Offline: 50 },
  { month: "Jul", Online: 65, Offline: 25 },
  { month: "Aug", Online: 95, Offline: 70 },
];

const OrderSummaryChart = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-lg font-semibold mb-4">Resumo do pedido</h2>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Online" fill="#2563eb" radius={[4, 4, 0, 0]} />
          <Bar dataKey="Offline" fill="#f43f5e" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default OrderSummaryChart;
