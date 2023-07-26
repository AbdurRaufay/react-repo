// pages/index.js
import { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import Card from "../component/Card";
import { useTodosQuery } from "../queries/generated";

const Home = () => {
  const [token, setToken] = useState("");
  const [userId, setUserId] = useState("");

  useEffect(() => {
    var localToken = localStorage.getItem("token");
    if (localToken !== null || localToken !== undefined) {
      setToken(localToken);
    }
  }, []);

  useEffect(() => {
    var localUserId = localStorage.getItem("userId");
    if (localUserId !== null || localUserId !== undefined) {
      setUserId(localUserId);
    }
  }, []);

  const { data, isLoading } = useTodosQuery();

  return (
    <div className="w-full main-div h-100">
      <Navbar  />
      <div className="flex justify-center items-center">
        <div className="flex flex-wrap justify-center gap-4 ">
          {isLoading ? (
            <div>Loading...</div>
          ) : data && data?.todos?.length > 0 ? (
            data?.todos?.map((item) => (
              <div key={item.id}>
                <Card
                  title={item.title}
                  price={item.price}
                  description={item?.description}
                  itemId={item.id}
                />
              </div>
            ))
          ) : (
            <div>No data available.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
