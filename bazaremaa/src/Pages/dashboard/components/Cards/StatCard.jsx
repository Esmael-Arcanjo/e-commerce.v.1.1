// src/components/Cards/StatCard.jsx
import React from 'react';

const StatCard = ({ title, value, icon, color }) => {
  // Usar cores para o estilo do ícone (simulação)
  const iconStyle = {
    backgroundColor: color === 'green' ? '#10B981' : 
                     color === 'orange' ? '#F97316' : 
                     color === 'red' ? '#EF4444' : 
                     '#34D399',
    color: 'white',
    // ... outros estilos de ícone
  };

  return (
    <div className="stat-card bg-white p-5 rounded-lg shadow flex justify-between items-center">
      <div>
        <h3 className="text-sm font-medium text-gray-500">{title}</h3>
        <p className="text-2xl font-bold text-gray-800">{value}</p>
      </div>
      <div style={iconStyle} className="icon-badge p-3 rounded-full text-lg">
        {icon}
      </div>
    </div>
  );
};

export default StatCard;