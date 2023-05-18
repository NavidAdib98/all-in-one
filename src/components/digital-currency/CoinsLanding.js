import React, { useState, useEffect } from "react";
import axios from "axios";

//Components
import Loader from "../Loader";
import Coin from "./Coin";

//style
import styles from "./CoinsLanding.module.css";

const CoinsLanding = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const BASE_URL =
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&sparkline=false";
    axios
      .get(BASE_URL)
      .then((res) => res.data)
      .then((data) => setCoins(data))
      .catch((error) =>
        alert("unfortunately api is not responding. use vpn to change your IP")
      );
  }, []);

  const searchHandler = (event) => {
    setSearch(event.target.value);
  };
  const searchCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search)
  );
  return (
    <>
      <input
        className={styles.input}
        type="text"
        placeholder="Search..."
        value={search}
        onChange={searchHandler}
      />

      {!coins.length ? (
        <Loader />
      ) : (
        <div className={styles.coinContainer}>
          {searchCoins.map((coin) => (
            <Coin
              key={coin.id}
              name={coin.name}
              image={coin.image}
              symbol={coin.symbol}
              price={coin.current_price}
              marketCap={coin.market_cap}
              priceChange={coin.price_change_percentage_24h}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default CoinsLanding;
