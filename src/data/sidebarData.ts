import { icons } from "lucide-react";
const {
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
} = icons;




export const sidebarElements = [
  {
    title: "",
    items: [
      { id: 1, name: "Dashboard", Icon: Gauge, link: "/dashboard" },
      { id: 2, name: "Products", Icon: Warehouse, link: "/products" },
      { id: 3, name: "Favorites", Icon: Heart, link: "/favorites" },
      { id: 4, name: "Inbox", Icon: MessageCircleMore, link: "/inbox" },
      { id: 5, name: "Order Lists", Icon: ListTodo, link: "/orders" },
      { id: 6, name: "Product Stock", Icon: ChartCandlestick, link: "/stock" },
    ],
  },
  {
    title: "Pages",
    items: [
      { id: 1, name: "Pricing", Icon: Banknote, link: "/pricing" },
      { id: 2, name: "Calendar", Icon: Calendar, link: "/calendar" },
      { id: 3, name: "To-Do", Icon: Users, link: "/todo" },
      { id: 5, name: "Contact", Icon: User, link: "/contact" },
      { id: 6, name: "Invoice", Icon: Table, link: "/Invoice" },
      { id: 7, name: "UI Elements", Icon: Grid2x2, link: "/ui-elements" },
      { id: 8, name: "Team", Icon: ChartNoAxesColumnDecreasing, link: "/team" },
      { id: 9, name: "Table", Icon: Table, link: "/table" },
    ],
  },
];
