import React, { useState } from "react";
import "../../style/workerstatus.css";
import WorkerHeader from "../worker/WorkerHeader";

const scrapData = [
  {
    name: "John Doe",
    address: "123 Elm Street, Springfield",
    date: "2025-01-28",
    slot: "10:00 AM - 12:00 PM",
    cost_of_scrap: 120.5,
    weight_of_scrap: 50.0,
    phone_number: "123-456-7890",
    status: "completed",
    category_of_waste: "Metal",
  },
  {
    name: "Jane Smith",
    address: "456 Oak Avenue, Metropolis",
    date: "2025-01-28",
    slot: "02:00 PM - 04:00 PM",
    cost_of_scrap: 80.0,
    weight_of_scrap: 30.0,
    phone_number: "987-654-3210",
    status: "cancel",
    category_of_waste: "Plastic",
  },
  {
    name: "Alice Johnson",
    address: "789 Pine Lane, Gotham",
    date: "2025-01-28",
    slot: "04:00 PM - 06:00 PM",
    cost_of_scrap: 150.0,
    weight_of_scrap: 60.0,
    phone_number: "555-123-4567",
    status: "completed",
    category_of_waste: "Electronics",
  },
  {
    name: "Bob Brown",
    address: "321 Cedar Road, Star City",
    date: "2025-01-28",
    slot: "08:00 AM - 10:00 AM",
    cost_of_scrap: 95.5,
    weight_of_scrap: 40.0,
    phone_number: "555-987-6543",
    status: "completed",
    category_of_waste: "Paper",
  },
  {
    name: "Clara Evans",
    address: "654 Birch Boulevard, Central City",
    date: "2025-01-28",
    slot: "12:00 PM - 02:00 PM",
    cost_of_scrap: 110.0,
    weight_of_scrap: 45.0,
    phone_number: "222-333-4444",
    status: "cancel",
    category_of_waste: "Glass",
  },
  {
    name: "David Green",
    address: "987 Maple Drive, Starling City",
    date: "2025-01-28",
    slot: "06:00 PM - 08:00 PM",
    cost_of_scrap: 130.0,
    weight_of_scrap: 55.0,
    phone_number: "666-777-8888",
    status: "completed",
    category_of_waste: "Organic",
  },
];

const WorkerList = () => {
  const [statusFilter, setStatusFilter] = useState("all");
  const [dateFilter, setDateFilter] = useState("");
  const [minCost, setMinCost] = useState("");
  const [maxCost, setMaxCost] = useState("");

  const filteredData = scrapData.filter((entry) => {
    return (
      (statusFilter === "all" || entry.status === statusFilter) &&
      (dateFilter === "" || entry.date === dateFilter) &&
      (minCost === "" || entry.cost_of_scrap >= parseFloat(minCost)) &&
      (maxCost === "" || entry.cost_of_scrap <= parseFloat(maxCost))
    );
  });

  return (
    <div>
      <WorkerHeader />
      <div className="table-container">
        <h2 className="table-title">Scrap Data Table</h2>
        <div className="filter-container">
          <label htmlFor="status-filter" className="filterheader">
            Filter by Status:
          </label>
          <select
            id="status-filter"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="filterstatus"
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="cancel">Cancelled</option>
          </select>
          <label htmlFor="date-filter" className="filterheader">
            Filter by Date:
          </label>
          <input
            type="date"
            id="date-filter"
            value={dateFilter}
            onChange={(e) => setDateFilter(e.target.value)}
            className="filterstatus"
          />
          <label htmlFor="min-cost" className="filterheader">
            Min Cost:
          </label>
          <input
            type="number"
            id="min-cost"
            value={minCost}
            onChange={(e) => setMinCost(e.target.value)}
            className="filterstatus"
          />
          <label htmlFor="max-cost" className="filterheader">
            Max Cost:
          </label>
          <input
            type="number"
            id="max-cost"
            value={maxCost}
            onChange={(e) => setMaxCost(e.target.value)}
            className="filterstatus"
          />
        </div>
        <div className="table-wrapper">
          <table className="scrap-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Address</th>
                <th>Date</th>
                <th>Slot</th>
                <th>Cost ($)</th>
                <th>Weight (kg)</th>
                <th>Phone</th>
                <th>Category</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((entry, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "even-row" : "odd-row"}
                >
                  <td>{entry.name}</td>
                  <td>{entry.address}</td>
                  <td>{entry.date}</td>
                  <td>{entry.slot}</td>
                  <td>${entry.cost_of_scrap.toFixed(2)}</td>
                  <td>{entry.weight_of_scrap} kg</td>
                  <td>{entry.phone_number}</td>
                  <td>{entry.category_of_waste}</td>
                  <td className={entry.status}>{entry.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default WorkerList;
