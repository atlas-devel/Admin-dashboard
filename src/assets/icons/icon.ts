import {
  Heart,
  Grid2x2,
  Gauge,
  MessageCircleMore,
  Warehouse,
  ChartCandlestick,
  Calendar,
  ListTodo,
  User,
  Banknote,
  ChartNoAxesColumnDecreasing,
  Users,
  Table,
} from "lucide-react";
import type { SidebarInfo } from "../../@types/types";

export const sidebarIcons: SidebarInfo[] = [
  { id: 1, name: "Dashboard", Icon: Gauge, link: "/dashboard" },
  { id: 2, name: "Products", Icon: Grid2x2, link: "/products" },
  { id: 3, name: "Favorites", Icon: Heart, link: "/favorites" },
  { id: 4, name: "Inbox", Icon: MessageCircleMore, link: "/inbox" },
];

export const sidebarPages: SidebarInfo[] = [
  { id: 5, name: "Product Stock", Icon: Warehouse, link: "/product-stock" },
  { id: 6, name: "Pricing", Icon: ChartCandlestick, link: "/pricing" },
  { id: 7, name: "Calender", Icon: Calendar, link: "/calender" },
  { id: 8, name: "To-Do", Icon: ListTodo, link: "/todo" },
  { id: 9, name: "Contacts", Icon: Users, link: "/contacts" },
  { id: 10, name: "Invoice", Icon: Banknote, link: "/invoice" },
  {
    id: 11,
    name: "UI Elements",
    Icon: ChartNoAxesColumnDecreasing,
    link: "/ui-elements",
  },
  { id: 12, name: "Team", Icon: User, link: "/team" },
  { id: 13, name: "Table", Icon: Table, link: "/table" },
];
