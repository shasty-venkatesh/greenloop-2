import Workercard from "./Workercard";
import WorkerHeader from "./WorkerHeader";
import "../../style/worker.css";
import WorkerImg from "../../image/worker.png";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { GlobalContext } from "../home/GlobalContext";

function WorkerHome() {
  const [scrapData, setScrapData] = useState([]);
  const { globalId } = useContext(GlobalContext);

 
  async function fetchScrapData() {
    try {
      const res = await axios.get("http://localhost:3000/api/v1/user");
      const data = res.data;
      let orders = [];

      data.forEach((element) => {
        element.order.forEach((order) => {
          orders.push({ ...order, phone: element.phone });
        });
      });

 
      const resworker = await axios.get(
        `http://localhost:3000/api/v1/worker/${globalId}`
      );
      const Workeraddress = resworker.data.landmark;

      let filteredOrders = orders.filter(
        (order) =>
          order.landmark.trim().toLowerCase() ===
          Workeraddress.trim().toLowerCase()
      );

      await axios.put(`http://localhost:3000/api/v1/worker/${globalId}`, {
        order: filteredOrders,
      });

      setScrapData(filteredOrders.filter((item) => item.status === "pending"));
    } catch (error) {
      console.error("Error fetching scrap data:", error);
    }
  }

  async function updateOrderStatus(index, status) {
    try {
      const updatedScrapData = scrapData.map((item, i) =>
        i === index ? { ...item, status } : item
      );

      await axios.put(`http://localhost:3000/api/v1/worker/${globalId}`, {
        order: updatedScrapData,
      });

      fetchScrapData();
    } catch (error) {
      console.error(`Error updating order status to ${status}:`, error);
    }
  }

  useEffect(() => {
    fetchScrapData(); 
  }, []);

  return (
    <div>
      <WorkerHeader />
      <div className="workersection">
        <img src={WorkerImg} alt="worker" className="workerimg" />
        <div className="workercardlist">
          {scrapData.length === 0 ? (
            <p className="noorder">Better luck next time</p>
          ) : (
            scrapData.map((item, index) => (
              <Workercard
                key={index}
                name={item.name}
                address={item.address}
                cost={item.price}
                phoneNumber={item.phone}
                slot={item.time}
                time={item.date}
                weight={item.weight}
                category={item.category}
                index={index}
                completed={() => updateOrderStatus(index, "completed")}
                canceled={() => updateOrderStatus(index, "canceled")}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default WorkerHome;
