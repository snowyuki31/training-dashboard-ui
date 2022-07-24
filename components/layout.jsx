import Navbar from "./navbar";
import Footer from "./footer";
import { Grid, GridItem } from "@chakra-ui/react";

const Layout = ({ children }) => {
  return (
    <Grid
      templateAreas={`"header" "main" "footer"`}
      gridTemplateRows={"1fr 10fr 1fr"}
      gridTemplateColumns={"1fr"}
      h="100vh"
      gap="1"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <GridItem pl="2" bg="white.300" area={"header"}>
        <Navbar />
      </GridItem>
      <GridItem p="10" bg="white" area={"main"}>
        {children}
      </GridItem>
      <GridItem pl="2" bg="silver" area={"footer"}>
        <Footer />
      </GridItem>
    </Grid>
  );
};

export default Layout;
