import React from "react";
import StasCard from "../components/ui/StasCard";
import { StatsCardData } from "../data/PagesData";

function Home() {
  return (
    <div>
      <h1 className="text-3xl md:text-4xl font-semibold font-primary-text">
        Dashboard
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
        {StatsCardData.map((stats, idx) => (
          <StasCard
            key={idx}
            title={stats.title}
            number={stats.number}
            Icon={stats.Icon}
            color={stats.color}
            bgColor={stats.bgColor}
            rate={stats.rate}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
