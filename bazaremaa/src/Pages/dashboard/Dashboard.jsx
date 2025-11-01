import React, { useEffect, useState } from "react";
import StatCard from './components/Cards/StatCard';
import OrderSummaryChart from './components/Charts/OrderSummaryChart';
import RevenueChart from './components/Charts/RevenueChart';
import SalesOverview from './components/Widgets/SalesOverview';
import TopProducts from './components/Widgets/TopProducts';
import InvoiceList from './components/Widgets/InvoiceList';
import { getUserCount, getProductCount, getSalesSummary, getTopProducts } from "../../services/api";

const Dashboard = () => {
  const [stats, setStats] = useState([
    { title: 'Sales Today', value: '0', icon: '🛒', color: 'green' },
    { title: 'Visitors Today', value: '0', icon: '👥', color: 'orange' },
    { title: 'Ganhos totais', value: '0', icon: '💳', color: 'red' },
    { title: 'Pedidos pendentes', value: '0', icon: '📝', color: 'light-green' },
  ]);

  const [salesSummary, setSalesSummary] = useState({});
  const [topProducts, setTopProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersRes = await getUserCount();
        const productsRes = await getProductCount();
        const salesRes = await getSalesSummary();
        const topProductsRes = await getTopProducts();

        setStats([
          { title: 'Usuários', value: usersRes.data.count, icon: '👥', color: 'green' },
          { title: 'Produtos', value: productsRes.data.count, icon: '📦', color: 'orange' },
          { title: 'Ganhos totais', value: `R$ ${salesRes.data.totalValue}`, icon: '💳', color: 'red' },
          { title: 'Pedidos pendentes', value: salesRes.data.totalOrders, icon: '📝', color: 'light-green' },
        ]);

        setSalesSummary(salesRes.data);
        setTopProducts(topProductsRes.data);
      } catch (err) {
        console.error("Erro ao carregar dados do dashboard:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="dashboard-content p-6 bg-gray-50 min-h-screen">
      {/* Linha de Cartões */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Linha principal */}
      <div className="grid grid-cols-12 gap-6">
        {/* Coluna Esquerda */}
        <div className="col-span-12 lg:col-span-8 space-y-6">
          <OrderSummaryChart chartData={salesSummary.chartData} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TopProducts data={topProducts} />
            <InvoiceList />
          </div>
        </div>

        {/* Coluna Direita */}
        <div className="col-span-12 lg:col-span-4 space-y-6">
          <SalesOverview salesSummary={salesSummary} />
          <RevenueChart salesSummary={salesSummary} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
