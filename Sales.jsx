import React, { useEffect, useState } from "react";
import axios from "../axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  Rectangle,
} from "recharts";
const Sales = () => {
  const [CusData, setCusData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("./users");
      setCusData(response.data);
    }
    fetchData();
  }, []);
  const ChartData = [
    {
      name: "Jan",
      Profit: 4000,
      Sales: 2400,
      amt: 2400,
    },
    {
      name: "Feb",
      Profit: 3000,
      Sales: 1398,
      amt: 2210,
    },
    {
      name: "Mar",
      Profit: 2000,
      Sales: 9800,
      amt: 2290,
    },
    {
      name: "Apr",
      Profit: 2780,
      Sales: 3908,
      amt: 2000,
    },
    {
      name: "May",
      Profit: 1890,
      Sales: 4800,
      amt: 2181,
    },
    {
      name: "Jun",
      Profit: 2390,
      Sales: 3800,
      amt: 2500,
    },
    {
      name: "July",
      Profit: 3490,
      Sales: 4300,
      amt: 2100,
    },
  ];
  return (
    <main className=" main-container">
      <div className="charts">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={ChartData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="Sales"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="Profit" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={ChartData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="Sales"
              fill="#8884d8"
              activeBar={<Rectangle fill="pink" stroke="blue" />}
            />
            <Bar
              dataKey="Profit"
              fill="#82ca9d"
              activeBar={<Rectangle fill="gold" stroke="purple" />}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <h1 className="user">Customers Lists</h1>
      <table className="table table-secondary table-hover  table-striped et-3">
        <thead>
          <tr>
            <th>ID</th>
            <th>User</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {CusData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>

              <td>{item.username}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default Sales;
