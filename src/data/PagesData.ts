import type { StatsCardProps } from "../@types/types";
import { Box, Users, ChartLine, RotateCcw } from "lucide-react";

export const StatsCardData: StatsCardProps[] = [
  {
    title: "Total Users",
    number: 1200,
    Icon: Users,
    bgColor: "bg-violet-100",
    color: "text-violet-500",
    rate: 5.4,
  },
  {
    title: "Total Orders",
    number: 800,
    Icon: Box,
    bgColor: "bg-yellow-100",
    color: "text-orange-300 ",
    rate: 3.2,
  },
  {
    title: "Total Sales",
    number: 15000,
    Icon: ChartLine,
    bgColor: "bg-green-100",
    color: "text-label-primary",
    rate: -4.3,
  },
  {
    title: "Total Pending",
    number: 20240,
    Icon: RotateCcw,
    bgColor: "bg-label-hold/20",
    color: "text-label-orange",
    rate: 24000,
  },
];
