import Link from "next/link";
import Layout from "../../components/layout";
import { Stack, Box } from "@chakra-ui/react";

const Index = (props) => {
  var list = [];
  props.data.activities.forEach((element, index) =>
    list.push(
      <Box p={2}>
        <Link href={"/activity/" + element}>
          <a>{element}</a>
        </Link>
      </Box>
    )
  );

  return (
    <Layout>
      <Stack>{list}</Stack>
    </Layout>
  );
};

export default Index;

export const getServerSideProps = async ({ params }) => {
  const res = await fetch("http://localhost:8080/v1/activity/list");
  const data = await res.json();

  return {
    props: { data: data },
  };
};
