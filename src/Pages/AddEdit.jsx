import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import fireDb from "../firebase";
import "./AddEdit.css";

const initialState = {
  product: "",
  unit: "",
  amount: "",
};

function AddEdit() {
  const [state, setState] = useState(initialState);
  const [data, setData] = useState({});

  const { product, unit, amount } = state;

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!product || !unit || !amount) {
      alert("Introduzca un valor para continuar")
    } else {
      fireDb.child("Inventory").push(state, (err)=> {
        if (err) {
          alert("Error en carga");
        } else {
          alert("Carga Completa")
        }
      })
      setTimeout(()=> navigate("/"), 500);
    }
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <form
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="product">Nombre del Material:</label>
        <input
          type="text"
          id="product"
          name="product"
          placeholder="Nombre del Producto"
          value={product}
          onChange={handleInputChange}
        />
        <label htmlFor="unit">Unidad:</label>
        <input
          type="text"
          id="unit"
          name="unit"
          placeholder="Unidad del material"
          value={unit}
          onChange={handleInputChange}
        />
        <label htmlFor="amount">Cantidad:</label>
        <input
          type="number"
          id="amount"
          name="amount"
          placeholder="Cantidad"
          value={amount}
          onChange={handleInputChange}
        />

        <input type="submit" value="Guardar" />
      </form>
    </div>
  );
}

export default AddEdit;
