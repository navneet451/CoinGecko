import React, { useEffect } from "react";

const Data = ({ data }) => {
  return (
    <div>
      {data && data.length > 0 ? (
        data.map((item, index) => (
          <table
            key={index}
            border="1"
            style={{ margin: "10px", width: "50%" }}
          >
            <thead>
              <tr>
                <th>Field</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Id</td>
                <td>{item.id}</td>
              </tr>
              <tr>
                <td>Symbol</td>
                <td>{item.symbol}</td>
              </tr>
              <tr>
                <td>Name</td>
                <td>{item.name}</td>
              </tr>
              <tr>
                <td>Image</td>
                <td>
                  <img src={item.image} />
                </td>
              </tr>
              <tr>
                <td>Current_Price</td>
                <td>{item.current_price}</td>
              </tr>
              <tr>
                <td>Market Cap</td>
                <td>{item.market_cap}</td>
              </tr>
              <tr>
                <td>Market Cap Rank</td>
                <td>{item.market_cap_rank}</td>
              </tr>
              <tr>
                <td>Valuation</td>
                <td>{item.fully_diluted_valuation}</td>
              </tr>
              <tr>
                <td>Total volume</td>
                <td>{item.total_volume}</td>
              </tr>
              <tr>
                <td>High 24h</td>
                <td>{item.high_24h}</td>
              </tr>
              <tr>
                <td>Low 24h</td>
                <td>{item.low_24h}</td>
              </tr>
              <tr>
                <td>Price change 24h</td>
                <td>{item.price_change_24h}</td>
              </tr>
              <tr>
                <td>Price change percentage 24h</td>
                <td>{item.price_change_percentage_24h}</td>
              </tr>
              <tr>
                <td>Market cap change 24h</td>
                <td>{item.market_cap_change_24h}</td>
              </tr>
              <tr>
                <td>Market cap change % 24h</td>
                <td>{item.market_cap_change_percentage_24h}</td>
              </tr>
              <tr>
                <td>Circulating supply</td>
                <td>{item.circulating_supply}</td>
              </tr>
              <tr>
                <td>Total supply</td>
                <td>{item.total_supply}</td>
              </tr>
              <tr>
                <td>Max supply</td>
                <td>{item.max_supply}</td>
              </tr>
              <tr>
                <td>Ath</td>
                <td>{item.ath}</td>
              </tr>
              <tr>
                <td>Ath change %</td>
                <td>{item.ath_change_percentage}</td>
              </tr>
              <tr>
                <td>Ath date</td>
                <td>{item.ath_date}</td>
              </tr>
              <tr>
                <td>Atl</td>
                <td>{item.atl}</td>
              </tr>
              <tr>
                <td>Atl change %</td>
                <td>{item.atl_change_percentage}</td>
              </tr>
              <tr>
                <td>Atl date</td>
                <td>{item.atl_date}</td>
              </tr>
              {item.roi ? (
                <>
                  <tr>
                    <td>ROI Times</td>
                    <td>{item.roi.times}</td>
                  </tr>
                  <tr>
                    <td>ROI Currency</td>
                    <td>{item.roi.currency}</td>
                  </tr>
                  <tr>
                    <td>ROI Percentage</td>
                    <td>{item.roi.percentage}%</td>
                  </tr>
                </>
              ) : (
                <tr>
                  <td>ROI</td>
                  <td>Null</td>
                </tr>
              )}
              <tr>
                <td>Last updated</td>
                <td>{item.last_updated}</td>
              </tr>
            </tbody>
          </table>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Data;
