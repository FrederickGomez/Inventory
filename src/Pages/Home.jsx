import React, { useState, useEffect } from "react";
import fireDb from "../firebase";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    fireDb.child("Inventory").on("value", (snapshot) => {
      if (snapshot.val() !== null) {
        setData({ ...snapshot.val() });
      } else {
        setData({});
      }
    });
    return () => {
      setData({});
    };
  }, []);

  return (
    <div style={{ marginTop: "100px" }}>
      <table className="styled-table">
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>No.</th>
            <th style={{ textAlign: "center" }}>Material</th>
            <th style={{ textAlign: "center" }}>Unidad:</th>
            <th style={{ textAlign: "center" }}>Cantidad:</th>
            <th style={{ textAlign: "center" }}>Acciones:</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(data).map((id, index) => {
            return (
              <tr key={id}>
                <th scope="row">{index + 1}</th>
                <td>{data[id].product}</td>
                <td>{data[id].unit}</td>
                <td>{data[id].amount}</td>
                <td>
                  <Link to={`/update/${id}`}>
                    <button className="btn btn-edit">Solicitar</button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
