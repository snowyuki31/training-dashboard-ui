import { Flex, Box } from "@chakra-ui/react";
import { Area, AreaChart, Tooltip, XAxis, YAxis } from "recharts";
import Layout from "../../components/layout";

const Activity = (props) => {
  const data = props.data;
  return (
    <Layout>
      <Flex>
        <Box h="10">Activity {props.id}</Box>
      </Flex>
      <Flex>
        <Box h="10">
          HeartRate: (Avg){data.mean.heart_rate} BPM, (Max){data.max.heart_rate}{" "}
          BPM
        </Box>
      </Flex>
      <Flex>
        <Box h="10">
          Power: (Avg){data.mean.watts} W, (Max){data.max.watts} W
        </Box>
      </Flex>
      <Flex>
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
      </Flex>
    </Layout>
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
