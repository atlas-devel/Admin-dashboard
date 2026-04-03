import { TrendingUp, TrendingDown } from "lucide-react";
import type { StatsCardProps } from "../../../@types/types";

function StatsCard({
  title,
  number,
  Icon,
  bgColor,
  color,
  rate,
  isCurrency = false,
}: StatsCardProps) {
  const isPositive = rate >= 0;
  const absRate = Math.abs(rate);

  const formatNumber = (num: number) => {
    if (isCurrency) {
      return new Intl.NumberFormat("en-RW", {
        style: "currency",
        currency: "RWF",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(num);
    }
    return num.toLocaleString();
  };

  return (
    <div className="mt-6 group relative overflow-hidden rounded-xl bg-white dark:bg-white/8  dark:backdrop-blur-2xl p-6 shadow-sm transition-all hover:shadow-md border border-gray-100 dark:border-gray-800">
      <div
        className={`absolute -right-8 -top-8 h-24 w-24 rounded-full ${bgColor.replace("100", "50")} opacity-30 blur-2xl transition-opacity group-hover:opacity-50`}
      />

      <div className="relative">
        <div className="flex items-center justify-between">
          <p className="text-lg  font-medium text-gray-500 dark:text-white">
            {title}
          </p>
          <div className={`rounded-xl ${bgColor} p-3 ${color}`}>
            <Icon width={20} height={20} />
          </div>
        </div>

        <div className="mt-4">
          <p className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
            {formatNumber(number)}
          </p>
        </div>

        <div className="mt-4 flex items-center gap-2">
          <div
            className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium ${
              isPositive
                ? "bg-green-50 text-green-600"
                : "bg-red-50 text-red-600"
            }`}
          >
            {isPositive ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
            <span>{absRate}%</span>
          </div>
          <span className="text-xs text-gray-400 ">vs last month</span>
        </div>
      </div>
    </div>
  );
}

export default StatsCard;
