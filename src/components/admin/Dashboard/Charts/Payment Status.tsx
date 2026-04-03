// src/components/admin/dashboard/charts/PaymentStatusChart.tsx
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

interface PaymentStatusData {
  status: string;
  count: number;
  percentage: number;
}

interface PaymentStatusChartProps {
  data: PaymentStatusData[];
}

const COLORS = {
  Paid: "#22c55e",
  "Grace Period": "#eab308",
  Overdue: "#ef4444",
  Pending: "#94a3b8",
};

export function PaymentStatusChart({ data }: PaymentStatusChartProps) {
  const chartData = data.map((item) => ({
    name: item.status,
    value: item.count,
    percentage: item.percentage,
  }));

  return (
    <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-100 dark:bg-black dark:border-gray-800">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Payment Status
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Current month payment distribution
        </p>
      </div>

      <ResponsiveContainer width="100%" height={280}>
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            paddingAngle={2}
            dataKey="value"
            label={({ name, percent }) =>
              `${name} ${(percent * 100).toFixed(0)}%`
            }
            labelLine={false}
          >
            {chartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[entry.name as keyof typeof COLORS] || "#94a3b8"}
                stroke="black"
                strokeWidth={2}
              />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: "#1a1a1a",
              border: "1px solid #333333",
              borderRadius: "8px",
              color: "#ffffff",
            }}
            formatter={(value: number, name: string, props: any) => [
              `${value} tenants (${props.payload.percentage}%)`,
              name,
            ]}
          />
          <Legend
            verticalAlign="bottom"
            height={36}
            formatter={(value) => (
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {value}
              </span>
            )}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
