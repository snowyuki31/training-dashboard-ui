import { Flex, Box } from "@chakra-ui/react";
import Status from "../../atoms/status";

const StatusBox = (props) => {
  var heart_rate = props.values.heart_rate;
  var watts = props.values.watts;

  return (
    <Flex
      borderRadius="md"
      borderWidth="1px"
      borderColor="gray.500"
      overflow="hidden"
      px={4}
      hidden={!heart_rate && !watts}
    >
      <Box p={2}>{props.title}</Box>
      <Box p={2} color="#8884d8" hidden={!watts}>
        <Status icon="power" text={watts} />
      </Box>
      <Box p={2} color="tomato" hidden={!heart_rate}>
        <Status icon="heart" text={heart_rate} />
      </Box>
    </Flex>
  );
};

export default StatusBox;
