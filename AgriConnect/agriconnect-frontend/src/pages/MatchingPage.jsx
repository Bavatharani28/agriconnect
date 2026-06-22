import "../styles/Form.css";
import api from "../services/api";
import { useState, useEffect } from "react";

function MatchingPage() {
  const [jobs, setJobs] = useState([]);
  const [workers, setWorkers] = useState([]);
  const [selectedJobId, setSelectedJobId] = useState(null);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await api.get("/jobs");
      setJobs(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const findMatches = async (skill, location, jobId) => {
    try {
      setSelectedJobId(jobId);

      const response = await api.get(
        `/matching?skill=${skill}&location=${location}`
      );

      setWorkers(response.data);
    } catch (error) {
      console.log(error);
      alert("Matching failed");
    }
  };

  const createBooking = async (workerId) => {
    try {
      const booking = {
        jobId: selectedJobId,
        providerId: workerId,
        serviceType: "WORKER"
      };

      await api.post("/bookings/create", booking);

      alert("Booking Confirmed!");
    } catch (error) {
      console.log(error);
      alert("Booking Failed");
    }
  };

  return (
    <div className="form-page">
      <div className="form-card">
        <h1>Smart Matching</h1>

        <h2>Available Farmer Jobs</h2>

        {jobs.length === 0 ? (
          <p>No farmer jobs available</p>
        ) : (
          jobs.map((job) => (
            <div
              key={job.jobId}
              style={{
                background: "#f5f5f5",
                padding: "20px",
                marginBottom: "15px",
                borderRadius: "15px"
              }}
            >
              <h3>Job #{job.jobId}</h3>
              <p>Type: {job.jobType}</p>
              <p>Location: {job.location}</p>
              <p>Workers Needed: {job.workersNeeded}</p>
              <p>Wage: ₹{job.wageOffered}</p>

              <button
                className="submit-btn"
                onClick={() =>
                  findMatches(
                    job.jobType,
                    job.location,
                    job.jobId
                  )
                }
              >
                Find Workers
              </button>
            </div>
          ))
        )}

        <br />

        {workers.length === 0 ? (
          <p style={{ textAlign: "center", color: "#666" }}>
            Select a farmer job to find matching workers 🌿
          </p>
        ) : (
          workers.map((worker) => (
            <div
              key={worker.workerId}
              style={{
                background: "#f5f5f5",
                padding: "20px",
                marginBottom: "15px",
                borderRadius: "15px"
              }}
            >
              <h3>Worker #{worker.workerId}</h3>
              <p>Match Score: 95%</p>
              <p>Skill: {worker.skill}</p>
              <p>Location: {worker.location}</p>
              <p>Wage: ₹{worker.dailyWage}</p>
              <p>
                Status:{" "}
                {worker.availability ? "Available" : "Busy"}
              </p>

              <button
                className="submit-btn"
                disabled={!worker.availability}
                onClick={() =>
                  createBooking(worker.workerId)
                }
              >
                {worker.availability
                  ? "Book Worker"
                  : "Worker Busy"}
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default MatchingPage;

// import "../styles/Form.css";
// import api from "../services/api";
// import { useState, useEffect } from "react";
// function MatchingPage() {
//   const [skill, setSkill] = useState("");
// const [location, setLocation] = useState("");
//   const [workers, setWorkers] = useState([]);
//   const [jobs, setJobs] = useState([]);

// const findMatches = async (skill, location) => {
//   try {
//     const response = await api.get(
//       `/matching?skill=${skill}&location=${location}`
//     );
//     setWorkers(response.data);
//   } catch (error) {
//     console.log(error);
//   }
// };
//   const createBooking = async (workerId) => {
//   try {
//     const booking = {
//   providerId: workerId,
//   serviceType: "WORKER"
// };

//     await api.post("/bookings/create", booking);

//     alert("Booking Confirmed!");
//   } catch (error) {
//     console.log(error);
//     alert("Booking Failed");
//   }
// };
// useEffect(() => {
//   fetchJobs();
// }, []);

// const fetchJobs = async () => {
//   try {
//     const response = await api.get("/jobs");
//     setJobs(response.data);
//   } catch (error) {
//     console.log(error);
//   }
// };

//   return (
//     <div className="form-page">
//       <div className="form-card">
        
//         <h1>Smart Matching</h1>
// <h2>Available Farmer Jobs</h2>

// {jobs.map((job) => (
//   <div className="service-card" key={job.jobId}>
//     <h3>Job #{job.jobId}</h3>
//     <p>Type: {job.jobType}</p>
//     <p>Location: {job.location}</p>
//     <p>Wage: ₹{job.wageOffered}</p>

//     <button
//       className="submit-btn"
//       onClick={() =>
//         findMatches(job.jobType, job.location)
//       }
//     >
//       Find Workers
//     </button>
//   </div>
// ))}
//         <div className="form-group">
//           <div className="form-group">
//   <label>Skill</label>
//   <input
//     value={skill}
//     onChange={(e) => setSkill(e.target.value)}
//     placeholder="Harvesting"
//   />
// </div>

// <div className="form-group">
//   <label>Location</label>
//   <input
//     value={location}
//     onChange={(e) => setLocation(e.target.value)}
//     placeholder="Pollachi"
//   />
// </div>
//         </div>

//         <button className="submit-btn" onClick={findMatches}>
//           Find Matching Workers
//         </button>

//         <br />
//         <br />

//         {workers.length === 0 ? (
//   <p style={{ textAlign: "center", color: "#666" }}>
//    Enter skill and location to find matching workers 🌿
//   </p>
// ) : (
//           workers.map((worker) => (
//             <div
//               key={worker.workerId}
//               style={{
//                 background: "#f5f5f5",
//                 padding: "20px",
//                 marginBottom: "15px",
//                 borderRadius: "15px"
//               }}
//             >
//               <h3>Worker #{worker.workerId}</h3>
//               <p>Match Score: 95%</p>
//               <p>Skill: {worker.skill}</p>
//               <p>Location: {worker.location}</p>
//               <p>Wage: ₹{worker.dailyWage}</p>
//               <p>
//                 Status:{" "}
//                 {worker.availability ? "Available" : "Busy"}
//               </p>
//               <button
//   className="submit-btn"
//   disabled={!worker.availability}
//   onClick={() => createBooking(worker.workerId)}
// >
//   {worker.availability ? "Book Worker" : "Worker Busy"}
// </button>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// }

// export default MatchingPage;