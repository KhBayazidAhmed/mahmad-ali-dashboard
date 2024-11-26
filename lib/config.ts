import {
  FaBitcoin,
  FaDollarSign,
  FaAddressCard,
  FaUsers,
  FaChartBar,
} from "react-icons/fa";

export const dashboardFormIdTypes = [
  {
    name: "NId_No",
    value: "NId_No",
  },
  {
    name: "From_No",
    value: "From_No",
  },
  {
    name: "Voter_No",
    value: "Voter_No",
  },
  {
    name: "Birth_No",
    value: "Birth_No",
  },
  {
    name: "Mobile_No",
    value: "Mobile_No",
  },
];
export const dashboardSummaryHeadings = [
  {
    name: "Income summary",
    data: [
      {
        name: "Total balance",
        value: "100",
      },
      {
        name: "Today order amount",
        value: "10",
      },
      {
        name: "Stock Balance",
        value: "10",
      },
    ],
    href: "/dashboard/income",
    icon: FaDollarSign,
  },
  {
    name: "Work Summary",
    data: [
      {
        name: "Today Sign Card",
        value: "100",
      },
      {
        name: "Today Server Cart",
        value: "10",
      },
      {
        name: "Today Nid card",
        value: "10",
      },
    ],
    href: "/admin/total-income",
    icon: FaAddressCard,
  },
  {
    name: "Recharge",
    data: [
      {
        name: "Remaining Balance",
        value: "100",
      },
    ],
    href: "/admin/demo-heading",
    icon: FaBitcoin,
  },
];
export const adminSummaryHeadings = [
  {
    name: "Users",
    href: "/admin/users",
    icon: FaUsers,
    data: [
      {
        name: "Total User",
        value: "100",
      },
    ],
  },
  {
    name: "Total Income",
    href: "/admin/total-income",
    icon: FaDollarSign,
    data: [
      {
        name: "Today Income",
        value: "100",
      },
    ],
  },
  {
    name: "Analytics",
    href: "/admin/Analytics",
    icon: FaChartBar,
    data: [
      {
        name: "Today Total Order",
        value: "100",
      },
    ],
  },
];
export const headerNavItemsAdmin = [
  { name: "Login", href: "/login" },
  { name: "Signup", href: "/signup" },
];
export const headerNavItemsDashboard = [
  { name: "Login", href: "/login" },
  { name: "Signup", href: "/signup" },
];
