import React, { useEffect, useState } from "react";
import axios from "../axios";

const Customers = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("./users");
      setData(response.data);
    }
    fetchData();
  }, []);

  return (
    <div className=" main-container">
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
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>

              <td>{item.username}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Customers;
