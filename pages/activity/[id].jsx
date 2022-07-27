import { Flex, Box, Heading, Stack } from "@chakra-ui/react";
import {
  Area,
  AreaChart,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import Layout from "../../components/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faBolt } from "@fortawesome/free-solid-svg-icons";

const Activity = (props) => {
  const data = props.data;
  return (
    <Layout>
      <Stack>
        <Flex>
          <Heading as="h1" size="xl">
            Activity {props.id}
          </Heading>
          <Heading as="h2" size="xs" pl="2" pt="7">
            {data.id}
          </Heading>
        </Flex>
      </Stack>
      <Flex py={4}>
        <Flex
          borderRadius="md"
          borderWidth="1px"
          borderColor="gray.500"
          overflow="hidden"
          px={4}
        >
          <Box p={2}>Average</Box>
          <Box p={2} color="tomato">
            <FontAwesomeIcon icon={faHeart} />
            {data.mean.heart_rate}
          </Box>
          <Box p={2} color="#8884d8">
            <FontAwesomeIcon icon={faBolt} />
            {data.mean.watts}
          </Box>
        </Flex>
        <Flex
          borderRadius="md"
          borderWidth="1px"
          borderColor="gray.500"
          overflow="hidden"
          px={4}
          mx={1}
        >
          <Box p={2}>Max</Box>
          <Box p={2} color="tomato">
            <FontAwesomeIcon icon={faHeart} />
            {data.max.heart_rate}
          </Box>
          <Box p={2} color="#8884d8">
            <FontAwesomeIcon icon={faBolt} />
            {data.max.watts}
          </Box>
        </Flex>

        <Flex
          borderRadius="md"
          borderWidth="1px"
          borderColor="gray.500"
          overflow="hidden"
          px={4}
        >
          <Box p={2}>
            Normalized Power <FontAwesomeIcon icon={faBolt} />
            {data.metric.np}
          </Box>
        </Flex>
      </Flex>

      <Stack>
        <Heading as="h2" size="lg">
          Power
        </Heading>

        <Flex>
          <ResponsiveContainer width="80%" height={200}>
            <AreaChart
              width={1000}
              height={300}
              data={data.activity}
              margin={{ top: 5, right: 20, left: 40, bottom: 5 }}
              syncId="rawData"
            >
              <defs>
                <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.75} />
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0.15} />
                </linearGradient>
              </defs>

              <XAxis tick={false} />
              <YAxis tick={{ stroke: "#f5f5f5" }} tickCount={5} unit="W" />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="watts"
                stroke="#8884d8"
                fillOpacity={0.8}
                fill="url(#color)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </Flex>
      </Stack>

      <Stack>
        <Heading as="h2" size="lg">
          Heart Rate
        </Heading>
        <Flex>
          <ResponsiveContainer width="80%" height={200}>
            <AreaChart
              width={1000}
              height={300}
              data={data.activity}
              margin={{ top: 5, right: 20, left: 40, bottom: 5 }}
              syncId="rawData"
            >
              <defs>
                <linearGradient id="orange_color" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#CC5500" stopOpacity={0.75} />
                  <stop offset="95%" stopColor="##CC5500" stopOpacity={0.15} />
                </linearGradient>
              </defs>

              <XAxis tick={false} />
              <YAxis tick={{ stroke: "#f5f5f5" }} tickCount={5} unit="BPM" />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="heart_rate"
                stroke="#CC5500"
                fillOpacity={0.8}
                fill="url(#orange_color)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </Flex>
      </Stack>
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
