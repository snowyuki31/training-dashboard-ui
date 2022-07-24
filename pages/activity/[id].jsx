import { useRouter } from "next/router";
import { Area, AreaChart, Tooltip, XAxis, YAxis } from "recharts";

const Activity = (props) => {
  const router = useRouter();
  const data = props.data;
  return (
    <>
      <h1>Activity {props.id}</h1>
      <h2>Summary</h2>
      <p>
        HeartRate: (Avg){data.mean.heart_rate} BPM, (Max){data.max.heart_rate}{" "}
        BPM
      </p>
      <p>
        Power: (Avg){data.mean.watts} W, (Max){data.max.watts} W
      </p>
      <h2>Raw Data</h2>
      <AreaChart
        width={1000}
        height={300}
        data={data.activity}
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

      <div onClick={() => router.back()}>Back</div>
    </>
  );
};

export default Activity;

export const getServerSideProps = async ({ params }) => {
  const res = await fetch("http://localhost:8080/v1/activity/" + params.id);
  const data = await res.json();

  return {
    props: { id: params.id, data: data },
  };
};
