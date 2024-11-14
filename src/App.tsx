// import { useEffect, useState } from "react";
import "./App.css";
import CoinsTable from "./Views/CoinsTable/CoinsTable";
import Header from "./Views/Header/Header";
import Navbar from "./Views/Navbar/Navbar";
// import { fetchPrices } from "./Services";

function App() {
  // const [prices, setPrices] = useState({});
  // const [loading, setLoading] = useState<boolean>(true);

  // useEffect(() => {
  //   fetchPrices({ setLoading, setPrices });
  // }, []);

  return (
    <>
      <Navbar />
      {/* {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {Object.entries(prices)?.map(([symbol, price]) => (
            <div key={symbol}>
              <strong>{symbol}</strong>: $
              {parseFloat(price as string).toFixed(2)}
            </div>
          ))}
        </div>
      )} */}
      <Header />
      <CoinsTable />
    </>
  );
}

export default App;
