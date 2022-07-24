import Link from "next/link";
import Layout from "../../components/layout";

const Index = (props) => {
  var list = [];
  props.data.activities.forEach((element, index) =>
    list.push(
      <li key={index}>
        <Link href={"/activity/" + element}>
          <a>{element}</a>
        </Link>
      </li>
    )
  );

  return (
    <Layout>
      <ul>{list}</ul>
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
