import { Flex, Box } from "@chakra-ui/react";
import Status from "../../atoms/status";

const StatusBox = (props) => {
  var heart_rate = props.values.heart_rate;
  var watts = props.values.watts;
  var np = props.values.np;

  return (
    <Flex
      borderRadius="md"
      borderWidth="1px"
      borderColor="gray.500"
      overflow="hidden"
      px={4}
      hidden={!heart_rate && !watts && !np}
    >
      <Box p={2}>{props.title}</Box>
      <Box p={2} color="#8884d8" hidden={!watts}>
        <Status icon="power" text={watts} />
      </Box>
      <Box p={2} color="tomato" hidden={!heart_rate}>
        <Status icon="heart" text={heart_rate} />
      </Box>
      <Box p={2} hidden={!np}>
        <Status icon="power" text={np} />
      </Box>
    </Flex>
  );
};

export default StatusBox;
