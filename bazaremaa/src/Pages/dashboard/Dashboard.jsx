// src/pages/Dashboard.jsx
import React from 'react';
import Layout from './components/Layout/Layout';
import StatCard from './components/Cards/StatCard';
import OrderSummaryChart from './components/Charts/OrderSummaryChart';
import RevenueChart from './components/Charts/RevenueChart';
import SalesOverview from './components/Widgets/SalesOverview';
import TopProducts from './components/Widgets/TopProducts';
import InvoiceList from './components/Widgets/InvoiceList';

const dashboardData = {
  // Mock Data (Dados de exemplo)
  stats: [
    { title: 'Sales Today', value: '4.562', icon: '🛒', color: 'green' },
    { title: 'Visitors Today', value: '27.424', icon: '👥', color: 'orange' },
    { title: 'Total Earnings', value: '$29.200', icon: '💳', color: 'red' },
    { title: 'Pending Orders', value: '45', icon: '📝', color: 'light-green' },
  ],
  // ... outros dados para gráficos e listas
};

const Dashboard = () => {
  return (
    <Layout>
      <div className="dashboard-content">
        {/* Linha de Cartões de Estatísticas */}
        <div className="stat-cards-container grid grid-cols-4 gap-4 mb-6">
          {dashboardData.stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        {/* Linha principal de Gráficos e Listas */}
        <div className="main-widgets-container grid grid-cols-12 gap-6">
          {/* Coluna Esquerda: Order Summary e Top Products */}
          <div className="col-span-8 space-y-6">
            <OrderSummaryChart />
            <div className="grid grid-cols-2 gap-6">
              <TopProducts />
              <InvoiceList />
            </div>
          </div>

          {/* Coluna Direita: Sales Overview e Revenue Chart */}
          <div className="col-span-4 space-y-6">
            <SalesOverview />
            <RevenueChart />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;