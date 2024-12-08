import React, { useState, useEffect } from "react";
import Data from "./components/Data";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
        );
        const jsonResponse = await response.json();
        setData(jsonResponse); 
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Cryptocurrency Data</h1>
      <Data data={data} />
    </div>
  );
};

export default App;
