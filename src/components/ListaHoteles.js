import React from "react";
import Card from "../components/Card";

const ListaHoteles = ({ mostrarListaFiltrada }) => {
  return (
    <div className="main-container">
      {mostrarListaFiltrada.map((hotel, i) => {
        return <Card hotel={hotel} key={i} />;
      })}
    </div>
  );
};

export default ListaHoteles;
