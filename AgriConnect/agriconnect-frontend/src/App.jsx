import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import WorkerForm from "./pages/WorkerForm";
import FarmerForm from "./pages/FarmerForm";
import MachineForm from "./pages/MachineForm";
import MatchingPage from "./pages/MatchingPage";
import WorkerGroupForm from "./pages/WorkerGroupForm";
import ContractServiceForm from "./pages/ContractServiceForm";
import AdminDashboard from "./pages/AdminDashboard";
import Marketplace from "./pages/Marketplace";
function App() {
  
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/worker-form" element={<WorkerForm />} />
        <Route path="/farmer-form" element={<FarmerForm />} />
        <Route path="/machine-form" element={<MachineForm />} />
        <Route path="/matching" element={<MatchingPage />} />
        <Route path="/worker-group" element={<WorkerGroupForm />} />
        <Route path="/contract-service" element={<ContractServiceForm />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/marketplace" element={<Marketplace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;