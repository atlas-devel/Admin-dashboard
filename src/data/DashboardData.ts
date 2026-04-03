// src/data/DashboardData.ts

export const userGrowthData = [
  { date: "Mar 25", newUsers: 12, activeUsers: 234 },
  { date: "Mar 26", newUsers: 18, activeUsers: 245 },
  { date: "Mar 27", newUsers: 8, activeUsers: 238 },
  { date: "Mar 28", newUsers: 22, activeUsers: 256 },
  { date: "Mar 29", newUsers: 15, activeUsers: 248 },
  { date: "Mar 30", newUsers: 10, activeUsers: 252 },
  { date: "Mar 31", newUsers: 25, activeUsers: 267 },
];

export const revenueData = [
  { month: "Jan", revenue: 4200000, payments: 28 },
  { month: "Feb", revenue: 4850000, payments: 32 },
  { month: "Mar", revenue: 5100000, payments: 35 },
  { month: "Apr", revenue: 4780000, payments: 31 },
  { month: "May", revenue: 5250000, payments: 38 },
  { month: "Jun", revenue: 5600000, payments: 42 },
  { month: "Jul", revenue: 5900000, payments: 45 },
  { month: "Aug", revenue: 6150000, payments: 48 },
  { month: "Sep", revenue: 6450000, payments: 51 },
  { month: "Oct", revenue: 6800000, payments: 54 },
  { month: "Nov", revenue: 7200000, payments: 58 },
  { month: "Dec", revenue: 8500000, payments: 67 },
];

export const paymentStatusData = [
  { status: "Paid", count: 342, percentage: 68 },
  { status: "Grace Period", count: 45, percentage: 9 },
  { status: "Overdue", count: 68, percentage: 14 },
  { status: "Pending", count: 45, percentage: 9 },
];

export const propertyStatsData = [
  { location: "Muhima", available: 8, occupied: 12, total: 20 },
  { location: "Kanombe", available: 5, occupied: 15, total: 20 },
  { location: "Kimironko", available: 3, occupied: 17, total: 20 },
  { location: "Kicukiro", available: 10, occupied: 8, total: 18 },
  { location: "Remera", available: 6, occupied: 14, total: 20 },
  { location: "Nyarugenge", available: 4, occupied: 11, total: 15 },
  { location: "Gasabo", available: 7, occupied: 13, total: 20 },
];

export const topLandlordsData = [
  { name: "Jean Mugisha", properties: 45, tenants: 42, revenue: 5400000 },
  { name: "Alice Uwase", properties: 28, tenants: 26, revenue: 3200000 },
  { name: "John Doe", properties: 15, tenants: 14, revenue: 1800000 },
  { name: "Sarah Nyira", properties: 12, tenants: 11, revenue: 1450000 },
  { name: "Peter Kamali", properties: 8, tenants: 7, revenue: 950000 },
  { name: "Marie Claire", properties: 6, tenants: 6, revenue: 720000 },
  { name: "Eric Nshuti", properties: 4, tenants: 4, revenue: 480000 },
];

export const recentActivities = [
  {
    id: 1,
    user: "Jean Mugisha",
    action: "Created property",
    target: "2BR Apartment, Kimironko",
    timestamp: "2024-03-31T10:30:00",
    status: "success",
  },
  {
    id: 2,
    user: "Alice Uwase",
    action: "Made payment",
    target: "150,000 RWF",
    timestamp: "2024-03-31T09:15:00",
    status: "success",
  },
  {
    id: 3,
    user: "Admin",
    action: "Verified property",
    target: "Studio, Muhima",
    timestamp: "2024-03-30T14:45:00",
    status: "success",
  },
  {
    id: 4,
    user: "John Doe",
    action: "Submitted blacklist report",
    target: "Tenant: Peter Kamali",
    timestamp: "2024-03-30T11:20:00",
    status: "pending",
  },
  {
    id: 5,
    user: "Sarah Nyira",
    action: "Registered as landlord",
    target: "3 properties added",
    timestamp: "2024-03-29T16:00:00",
    status: "success",
  },
  {
    id: 6,
    user: "Eric Nshuti",
    action: "Requested move out",
    target: "Property: Kanombe House B",
    timestamp: "2024-03-29T08:30:00",
    status: "pending",
  },
  {
    id: 7,
    user: "Marie Claire",
    action: "Made payment",
    target: "200,000 RWF",
    timestamp: "2024-03-28T13:45:00",
    status: "success",
  },
  {
    id: 8,
    user: "Peter Kamali",
    action: "Updated property",
    target: "Added parking and WiFi",
    timestamp: "2024-03-28T10:00:00",
    status: "success",
  },
];
const DashboardData = {
  userGrowthData,
  revenueData,
  paymentStatusData,
  propertyStatsData,
  topLandlordsData,
  recentActivities,
};

export default DashboardData;
