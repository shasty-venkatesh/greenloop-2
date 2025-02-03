import React, { useState, useEffect } from "react";
import WorkerHeader from "./WorkerHeader";
import "../../style/sellproduct.css";

function Sellingproduct() {
  const [scrapData, setScrapData] = useState([
    {
      cost_of_scrap: 120.5,
      weight_of_scrap: 50.0,
      status: "completed",
      category_of_waste: "Metal",
      selling_status: false, 
    },
    {
      cost_of_scrap: 80.0,
      weight_of_scrap: 30.0,
      status: "cancel",
      category_of_waste: "Plastic",
      selling_status: false,
    },
    {
      cost_of_scrap: 150.0,
      weight_of_scrap: 60.0,
      status: "completed",
      category_of_waste: "Electronics",
      selling_status: false,
    },
    {
      cost_of_scrap: 95.5,
      weight_of_scrap: 40.0,
      status: "completed",
      category_of_waste: "Paper",
      selling_status: false,
    },
    {
      cost_of_scrap: 110.0,
      weight_of_scrap: 45.0,
      status: "cancel",
      category_of_waste: "Glass",
      selling_status: false,
    },
    {
      cost_of_scrap: 130.0,
      weight_of_scrap: 55.0,
      status: "completed",
      category_of_waste: "Organic",
      selling_status: false,
    },
    {
      cost_of_scrap: 120.5,
      weight_of_scrap: 50.0,
      status: "completed",
      category_of_waste: "Metal",
      selling_status: false,
    },
    {
      cost_of_scrap: 80.0,
      weight_of_scrap: 30.0,
      status: "cancel",
      category_of_waste: "Plastic",
      selling_status: false,
    },
    {
      cost_of_scrap: 150.0,
      weight_of_scrap: 60.0,
      status: "completed",
      category_of_waste: "Electronics",
      selling_status: false,
    },
    {
      cost_of_scrap: 95.5,
      weight_of_scrap: 40.0,
      status: "completed",
      category_of_waste: "Paper",
      selling_status: false,
    },
    {
      cost_of_scrap: 110.0,
      weight_of_scrap: 45.0,
      status: "cancel",
      category_of_waste: "Glass",
      selling_status: false,
    },
    {
      cost_of_scrap: 130.0,
      weight_of_scrap: 55.0,
      status: "completed",
      category_of_waste: "Organic",
      selling_status: false,
    },
  ]);

  useEffect(() => {
    const processdata = async () => {
      const completedScrapData = scrapData.filter(
        (item) => item.status === "completed"
      );

      const groupedScrapData = completedScrapData.reduce((acc, item) => {
        const existingItem = acc.find(
          (i) => i.category_of_waste === item.category_of_waste
        );
        if (existingItem) {
          existingItem.weight_of_scrap += item.weight_of_scrap;
          existingItem.cost_of_scrap += item.cost_of_scrap;
        } else {
          acc.push({
            category_of_waste: item.category_of_waste,
            weight_of_scrap: item.weight_of_scrap,
            cost_of_scrap: item.cost_of_scrap,
            selling_status: false,
          });
        }
        return acc;
      }, []);
      console.log(groupedScrapData);
      await setScrapData(groupedScrapData);
      console.log("111", scrapData);
    };
    processdata();
  }, []);

  const handleSell = (category_of_waste) => {
    const updatedScrapData = scrapData.map((item) =>
      item.category_of_waste === category_of_waste
        ? { ...item, selling_status: true }
        : item
    );
    setScrapData(updatedScrapData);
  };

  return (
    <div>
      <WorkerHeader />
      <div className="sellproduct">
        {scrapData.map((item, k) => (
          <div key={k} className="product">
            <p className="owner">{item.category_of_waste}</p>
            <div className="feature">
              <p>{item.weight_of_scrap}kg</p>
              <p>₹{item.cost_of_scrap}</p>
            </div>
            <button
              className="sellingbutton"
              onClick={() => handleSell(item.category_of_waste)}
            >
              {item.selling_status ? "Pending" : "Sell"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sellingproduct;
