import { useEffect, useState } from "react";
import axios from "axios";

const Activity = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("/api/v1/activity/latest").then((response) => {
      setData(response.data);
    });
  }, []);

  console.log(data.trackpoint);

  return (
    <>
      <p>data</p>
    </>
  );
};

export default Activity;
