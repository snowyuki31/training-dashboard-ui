import { useEffect, useState } from "react";
import axios from "axios";
import { Area, AreaChart, Tooltip, XAxis, YAxis } from "recharts";

const Activity = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("/api/v1/activity/latest");
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <AreaChart
      width={1000}
      height={300}
      data={data.trackpoint}
      margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
    >
      <defs>
        <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#8884d8" stopOpacity={0.75} />
          <stop offset="95%" stopColor="#8884d8" stopOpacity={0.15} />
        </linearGradient>
      </defs>

      <XAxis dataKey="none" tickCount={50} tick={{ stroke: "#f5f5f5" }} />
      <YAxis tick={{ stroke: "#f5f5f5" }} tickCount={6} unit="W" />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="watts"
        stroke="#8884d8"
        fillOpacity={0.8}
        fill="url(#color)"
      />
    </AreaChart>
  );
};

export default Activity;
