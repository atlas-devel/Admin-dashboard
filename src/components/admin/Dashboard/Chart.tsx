import {
  AreaChart,
  CartesianGrid,
  Label,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function Chart() {
  return (
    <div className="w-full bg-white mt-10 p-3 shadow-sm rounded-md  ">
      <h1 className="text-2xl font-medium p-5">Sales Details</h1>

      <div className="h-120">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart>
            <XAxis />
            <YAxis />
            <CartesianGrid />
            <Label />
            <Tooltip />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Chart;
