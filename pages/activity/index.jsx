import { useEffect, useState } from "react";
import axios from "axios";

const Activity = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("/api/v1/activity/latest").then((response) => {
      console.log("response", response);
      setData(response.data);
    });
  }, []);

  console.log(data);

  return (
    <>
      <p>data</p>
    </>
  );
};

export default Activity;
