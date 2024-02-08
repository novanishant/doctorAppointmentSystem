import { useEffect } from "react";
import axios from "axios";
import Layout from "../components/Layout";
function HomePage() {
  const getUserData = async () => {
    try {
      const res = await axios.post(
        "/api/v1/user/getUserData",
        {},
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUserData();
  }, []);

  return (
    <>
      <Layout>
        <h1>HomePage</h1>
      </Layout>
    </>
  );
}

export default HomePage;
