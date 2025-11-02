// src/Pages/dashboard/components/Widgets/InvoiceList.jsx
import React from "react";

const invoices = [
  { id: "#5010", desc: "Lorem Ipsum", amount: "$548", status: "Paid", date: "15 Jan" },
  { id: "#5011", desc: "Adipiscing Elit", amount: "$320", status: "Unpaid", date: "16 Jan" },
  { id: "#5012", desc: "Dolor Sit", amount: "$180", status: "Pending", date: "18 Jan" },
];

const InvoiceList = () => (
  <div className="bg-white p-6 rounded-xl shadow">
    <h2 className="text-lg font-semibold mb-4">Lista de faturas</h2>
    <table className="w-full text-sm">
      <thead>
        <tr className="text-left text-gray-500 border-b">
          <th>#Invoice</th>
          <th>Description</th>
          <th>Amount</th>
          <th>Status</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {invoices.map((inv, i) => (
          <tr key={i} className="border-b last:border-0">
            <td className="py-2">{inv.id}</td>
            <td>{inv.desc}</td>
            <td>{inv.amount}</td>
            <td>
              <span
                className={`px-2 py-1 rounded text-xs font-semibold ${
                  inv.status === "Paid"
                    ? "bg-green-100 text-green-600"
                    : inv.status === "Unpaid"
                    ? "bg-red-100 text-red-600"
                    : "bg-yellow-100 text-yellow-600"
                }`}
              >
                {inv.status}
              </span>
            </td>
            <td>{inv.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default InvoiceList;
