import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import fireDb from "../firebase";
import "./AddRegister.css";

const initialState = {
  product: "",
  unit: "",
  amount: 0,
};

function EditRegister() {
  const [state, setState] = useState(initialState);
  const [data, setData] = useState({});

  const { unit, product, amount } = state;

  const {id} = useParams();

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
  }, [id]);

  useEffect(()=>{
      if(id) {
        setState({...data[id]})
      } else {
        setState({...initialState})
      }

      return() =>{
        setState({...initialState})
      };
  },[id, data])

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
      fireDb.child("Inventory").put(state, (err)=> {
        if (err) {
          alert("Error en solicitud");
        } else {
          alert("Solicitud completa, favor proceder a retirar material con el personal encargado")
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
          placeholder="Material"
          value={product || ""}
          
        />
        <label htmlFor="unit">Unidad:</label>
        <input
          type="text"
          id="unit"
          name="unit"
          placeholder="Unidad del Material"
          value={unit || ""}
          
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

        <input type="submit" value="Solicitar" />
      </form>
    </div>
  );
}

export default EditRegister;
