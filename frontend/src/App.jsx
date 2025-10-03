import { useState, useEffect } from "react";

function App() {
  const [apiStatus, setApiStatus] = useState("loading...");

  useEffect(() => {
    fetch("/api/health")
      .then((res) => {
        if (!res.ok) throw new Error("API unreachable");
        return res.json();
      })
      .then((data) => setApiStatus(data.status))
      .catch(() => setApiStatus("offline"));
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">
      <div className="text-center space-y-6">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-teal-600 text-3xl font-bold">
          O
        </div>
        <h1 className="text-4xl font-bold tracking-tight">
          Portfolio Oryel
        </h1>
        <p className="text-gray-400 text-lg">
          Aissatou Gassama - Fullstack Dev Python/React & IA
        </p>
        <div className="flex items-center justify-center gap-2 text-sm">
          <span
            className={`inline-block w-2 h-2 rounded-full ${
              apiStatus === "ok" ? "bg-green-400" : "bg-red-400"
            }`}
          />
          <span className="text-gray-500">
            API: {apiStatus === "ok" ? "connectée" : apiStatus}
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
