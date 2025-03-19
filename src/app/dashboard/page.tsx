"use client";

import { useSession } from "next-auth/react";
import Navigation from "../components/Navigation";
import { Box } from "@mui/material";
import SalesCharts from "../components/SalesCharts";
import SortableFilterableTable from "../components/SortableTable";

export default function Dashboard() {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col gap-3 min-h-screen p-[5%]">
      <Navigation />
      <section>
        <Box className="px-[5%] font-[600] text-[30px]" component={"h1"}>Hi {session?.user?.name}</Box>
      </section>
      <Box className="grid grid-cols-1 md:grid-cols-3 gap-3 px-[5%]">
        {cardsData.map((card, index) => (
          <Box
            component={"div"}
            key={index}
            className="flex flex-col gap-2 p-3 bg-gray-100 rounded-[6px]"
          >
            <Box component={"h2"}>{card.label}</Box>
            <Box component={"p"}>{card.value}</Box>
          </Box>
        ))}
      </Box>
      <SalesCharts />
      <div className="px-[5%]">
        <SortableFilterableTable/>
      </div>
    </div>
  );
}

const cardsData = [
  {
    label: "Total Users",
    value: 130,
  },
  {
    label: "Active Sessions",
    value: 30,
  },
  {
    label: "Sales Revenue",
    value: `$40,000.00`,
  },
];
