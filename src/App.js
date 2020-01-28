import React, { useState } from "react";
import {
  LineChart,
  Legend,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar
} from "recharts";

import "./App.css";

function App() {
  const [numbers, setNumbers] = useState([]);

  const onGenerateRandomNumbers = () => {
    const array = [];
    while (array.length < 100) {
      const r = Math.random().toFixed(1);
      // Save random number only bigger than 0 and less than 1
      if (r > 0 && r < 1) {
        array.push({ x: array.length, y: r });
      }
    }

    setNumbers(array);
  };

  return (
    <div className="App">
      <button onClick={onGenerateRandomNumbers}>Generate Numbers</button>

      {/* Line Graph */}
      <LineChart width={800} height={800} data={numbers}>
        <CartesianGrid />
        <XAxis type="number" dataKey="x" name="index" />
        <YAxis interval={0} />
        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
        <Legend />
        <Line type="monotone" dataKey="y" stroke="#8884d8" />
      </LineChart>

      {/* Histogram */}
      <BarChart width={800} height={400} data={numbers}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="x" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="y" fill="#8884d8" />
      </BarChart>
    </div>
  );
}

export default App;
