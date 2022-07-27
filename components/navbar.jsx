import { Flex, Button } from "@chakra-ui/react";
import NextLink from "next/link";

const Navbar = () => {
  return (
    <Flex>
      <Flex position="fixed" top="1rem" left="1rem" align="center">
        {/* Desktop */}
        <NextLink href="/" passHref>
          <Button as="a" variant="ghost" aria-label="Home" my={1} w="100%">
            Home
          </Button>
        </NextLink>

        <NextLink href="/activity" passHref>
          <Button
            as="a"
            variant="ghost"
            aria-label="Activities"
            my={1}
            w="100%"
          >
            Activities
          </Button>
        </NextLink>
      </Flex>
    </Flex>
  );
};
export default Navbar;
