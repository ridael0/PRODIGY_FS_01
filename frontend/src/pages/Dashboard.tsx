import { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      try {
        const res = await axios.get("http://localhost:5000/api/dashboard", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setMessage(res.data.message);
      } catch {
        setMessage("Access denied");
        
      }
    };
    fetchData();
  }, []);

  return <div className="p-4 text-center">{message}</div>;
}