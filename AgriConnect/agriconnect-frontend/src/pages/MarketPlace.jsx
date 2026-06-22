import { useEffect, useState } from "react";
import api from "../services/api";
import "../styles/Marketplace.css";
import { useNavigate } from "react-router-dom";
function Marketplace() {
  const [workers, setWorkers] = useState([]);
  const [machines, setMachines] = useState([]);
  const [groups, setGroups] = useState([]);
  const [contracts, setContracts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetchData();
  }, []);
  const bookNow = (type, id) => {
  alert(`${type} #${id} Booked Successfully!`);
};

  const fetchData = async () => {
    const workersRes = await api.get("/workers");
    const machinesRes = await api.get("/machines");
    const groupsRes = await api.get("/groups");
    const contractRes = await api.get("/contract-services");

    setWorkers(workersRes.data);
    setMachines(machinesRes.data);
    setGroups(groupsRes.data);
    setContracts(contractRes.data);
  };

  return (
    <div className="marketplace">
      <h1>Available Services</h1>

      <h2>Workers</h2>
      {workers.map((worker) => (
  <div className="service-card" key={worker.workerId}>
    <h3>Worker #{worker.workerId}</h3>
    <p>Skill: {worker.skill}</p>
    <p>Location: {worker.location}</p>
    <p>District: {worker.district}</p>
    <p>Daily Wage: ₹{worker.dailyWage}</p>
    <p>Available: {worker.availability ? "Yes" : "No"}</p>
    <button
  className="book-btn"
  onClick={() => bookNow("Worker", worker.workerId)}
>
  Book Worker
</button>
  </div>
))}


      <h2>Machines</h2>
      {machines.map((machine) => (
  <div className="service-card" key={machine.machineId}>
    <h3>Machine #{machine.machineId}</h3>
    <p>Type: {machine.machineType}</p>
    <p>Location: {machine.location}</p>
    <p>District: {machine.district}</p>
    <p>Per Acre: ₹{machine.pricePerAcre}</p>
    <p>Per Hour: ₹{machine.pricePerHour}</p>
    <p>Available: {machine.availability ? "Yes" : "No"}</p>
    <button
  className="book-btn"
  onClick={() => bookNow("Machine", machine.machineId)}
>
  Book Machine
</button>
  </div>
  
  
))}

      <h2>Worker Groups</h2>
      {groups.map((group) => (
  <div className="service-card" key={group.groupId}>
    <h3>Group #{group.groupId}</h3>
    <p>Leader: {group.leaderName}</p>
    <p>Phone: {group.phone}</p>
    <p>Workers: {group.numberOfWorkers}</p>
    <p>Farming Type: {group.farmingType}</p>
    <p>Rate: ₹{group.ratePerDay}</p>
    <button
  className="book-btn"
  onClick={() => bookNow("Group", group.groupId)}
>
  Book Group
</button>
  </div>
))}
      <h2>Contract Services</h2>
      {contracts.map((service) => (
  <div className="service-card" key={service.serviceId}>
    <h3>Service #{service.serviceId}</h3>
    <p>Provider: {service.providerName}</p>
    <p>Phone: {service.phone}</p>
    <p>Farm Type: {service.farmType}</p>
    <p>Price/Acre: ₹{service.pricePerAcre}</p>
    <button
  className="book-btn"
  onClick={() => bookNow("Contract Service", service.serviceId)}
>
  Book Service
</button>
  </div>
))}
    </div>
  );
}

export default Marketplace;