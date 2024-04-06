import React, { PureComponent } from "react";

import {
  BsFillArchiveFill,
  BsPeopleFill,
  BsCurrencyDollar,
  BsBarChartFill,
} from "react-icons/bs";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

const Dashboard = () => {
  const data = [
    {
      name: "Jan",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Feb",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Mar",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Apr",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "May",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Jun",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "July",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <main className=" main-container">
      <div className="main=title">
        <h3>Dashboard</h3>
      </div>
      <div className="main-cards">
        <div className="card">
          <div className="card-inner">
            <h3>Sales</h3>
            <BsCurrencyDollar className="card-icon" />
          </div>
          <h1>20,300</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>Profits</h3>
            <BsBarChartFill className="card-icon" />
          </div>
          <h1>50%</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>Customers</h3>
            <BsPeopleFill className="card-icon" />
          </div>
          <h1>25,300</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>Inventory</h3>
            <BsFillArchiveFill className="card-icon" />
          </div>
          <h1>15,300</h1>
        </div>
      </div>
      <div className="charts">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={data}
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
              dataKey="pv"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </main>
  );
};

export default Dashboard;
