import { Flex, Box } from "@chakra-ui/react";
import Status from "../../atoms/status";

const StatsBox = (props) => {
  var np = props.values.metric.np;
  var ifactor = props.values.metric.if.toFixed(2);
  var tss = props.values.metric.tss;

  return (
    <Flex
      borderRadius="md"
      borderWidth="1px"
      borderColor="gray.500"
      overflow="hidden"
      px={4}
      hidden={!np && !ifactor && !tss}
    >
      <Box py={2} pl={2}>
        NP <Status icon="power" text={np} />
      </Box>
      <Box py={2} pl={2}>
        IF <Status icon="trend" text={ifactor} />
      </Box>
      <Box p={2}>
        TSS <Status icon="flame" text={tss} />
      </Box>
    </Flex>
  );
};

export default StatsBox;
