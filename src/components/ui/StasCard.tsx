import { Users } from "lucide-react";
import { TrendingUp } from "lucide-react";
import React from "react";
import type { StatsCardProps } from "../../@types/types";

function StasCard({
  title,
  number,
  Icon,
  bgColor,
  color,
  rate,
  rateColor,
}: StatsCardProps) {
  return (
    <div className="bg-background rounded-md p-4 flex flex-col mt-10 shadow-sm">
      <div className="flex justify-between ">
        {/* title and number*/}
        <div className="space-y-4">
          <p className="text-ring">{title}</p>
          <p className="font-semibold text-primary text-3xl">{number}</p>
        </div>
        {/* icon*/}
        <div className={`${color} ${bgColor} p-5 rounded-4xl shrink`}>
          <span>
            <Icon size={40} />
          </span>
        </div>
      </div>
      {/* growth */}
      <div className="flex gap-2 mt-6 text-ring">
        <span
          className={`flex items-center gap-2 ${rate < 0 ? "text-label-reject" : "text-label-primary"}`}
        >
          <TrendingUp />
          <p>{rate}</p>
        </span>{" "}
        <span> Up from yesterday</span>
      </div>
    </div>
  );
}

export default StasCard;
