import StatsCard from "../../../components/admin/Dashboard/StatsCard";
import DashboardData from "@/data/DashboardData";
import useSidebar from "../../../hooks/useSidebar";
import { UserGrowthChart } from "../../../components/admin/Dashboard/Charts/UserGrowth";
import { PaymentStatusChart } from "../../../components/admin/Dashboard/Charts/Payment Status";
import { RevenueChart } from "../../../components/admin/Dashboard/Charts/RevenueGrowth";
import { RecentActivity } from "../../../components/admin/Dashboard/Charts/RecentActivity";
import { TopLandlordsChart } from "../../../components/admin/Dashboard/Charts/TopLandlordData";
import { PropertyLocationChart } from "../../../components/admin/Dashboard/Charts/PropertyLocationData";

import {
  userGrowthData,
  revenueData,
  paymentStatusData,
  propertyStatsData,
  topLandlordsData,
  recentActivities,
} from "@/data/DashboardData";

function AdminDashboard() {
  const { isOpen } = useSidebar();

  // Responsive grid columns based on sidebar state
  const statsGridCols = isOpen
    ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
    : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4";

  return (
    <div className="p-4 md:p-6 lg:p-8">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
          Dashboard
        </h1>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Welcome back! Here's what's happening with your platform today.
        </p>
      </div>

      {/* Stats Cards Section */}
      <section className="mb-10">
        <div className={`grid ${statsGridCols} gap-5`}>
          {DashboardData.StatsCardData.map((stats, index) => (
            <StatsCard
              key={stats.title + index}
              title={stats.title}
              number={stats.number}
              Icon={stats.Icon}
              color={stats.color}
              bgColor={stats.bgColor}
              rate={stats.rate}
              isCurrency={stats.isCurrency}
            />
          ))}
        </div>
      </section>

      {/* Charts Section */}
      <section>
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 md:text-2xl dark:text-white ">
            Analytics
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 ">
            Visual insights into your platform performance
          </p>
        </div>

        {/* Row 1: User Growth + Payment Status */}
        <div className="mb-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <UserGrowthChart data={userGrowthData} />
          <PaymentStatusChart data={paymentStatusData} />
        </div>

        {/* Row 2: Revenue + Property Distribution */}
        <div className="mb-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <RevenueChart data={revenueData} />
          <PropertyLocationChart data={propertyStatsData} />
        </div>

        {/* Row 3: Recent Activity + Top Landlords */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <RecentActivity data={recentActivities} />
          </div>
          <div className="lg:col-span-1">
            <TopLandlordsChart data={topLandlordsData} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default AdminDashboard;
