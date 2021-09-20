import React, { useState } from "react";
import "./index.css";
import Header from "./components/Header";
import Form from "./components/Form";
import ListaHoteles from "./components/ListaHoteles";
import { hotelsData } from "./constants/data";
import Error from "./components/Error";

export default function App() {
  const estadoInicial = {
    desde: "Seleccione una fecha",
    hasta: "Seleccione una fecha",
    lugar: "Todos los paises",
    precio: "Cualquier precio",
    tamanio: "Cualquier tamaño"
  };
  const [fechaDesde, actualizarFechaDesde] = useState(estadoInicial.desde);
  const [fechaHasta, actualizarFechaHasta] = useState(estadoInicial.hasta);
  const [lugar, actualizarLugar] = useState(estadoInicial.lugar);
  const [precio, actualizarPrecio] = useState(estadoInicial.precio);
  const [tamanio, actualizarTamanio] = useState(estadoInicial.tamanio);

  let DS_desde = new Date(fechaDesde + "T00:00:00");
  let DS_hasta = new Date(fechaHasta + "T00:00:00");

  const opciones = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };

  let desdeNatural = DS_desde.toLocaleDateString("es-AR", opciones);
  let hastaNatural = DS_hasta.toLocaleDateString("es-AR", opciones);

  let desdeUNIX = DS_desde.getTime();
  let hastaUNIX = DS_hasta.getTime();

  const crearLista = () => {
    const nuevaLista = hotelsData
      .filter((hotel) => {
        if (
          fechaDesde !== estadoInicial.desde &&
          fechaHasta !== estadoInicial.hasta
        ) {
          return (
            hotel.availabilityFrom >= desdeUNIX &&
            hotel.availabilityTo <= hastaUNIX
          );
        } else {
          return hotel;
        }
      })
      .filter((hotel) => {
        if (lugar !== estadoInicial.lugar) {
          return hotel.country.toLowerCase() === lugar;
        }
        return hotel;
      })
      .filter((hotel) => {
        if (tamanio !== estadoInicial.tamanio) {
          if (tamanio === "pequenio") {
            return hotel.rooms <= 10;
          } else if (tamanio === "mediano") {
            return hotel.rooms > 10 && hotel.rooms <= 20;
          } else {
            return hotel.rooms > 20;
          }
        }
        return hotel;
      })
      .filter((hotel) => {
        if (precio !== estadoInicial.precio) {
          return hotel.price === Number(precio);
        }
        return hotel;
      });
    return nuevaLista;
  };

  let mostrarListaFiltrada = crearLista();

  return (
    <div className="body">
      <Header
        fechaDesde={fechaDesde}
        fechaHasta={fechaHasta}
        lugar={lugar}
        precio={precio}
        tamanio={tamanio}
        estadoInicial={estadoInicial}
        desdeNatural={desdeNatural}
        hastaNatural={hastaNatural}
      />
      <Form
        lugar={lugar}
        precio={precio}
        tamanio={tamanio}
        estadoInicial={estadoInicial}
        actualizarLugar={actualizarLugar}
        actualizarPrecio={actualizarPrecio}
        actualizarTamanio={actualizarTamanio}
        actualizarFechaDesde={actualizarFechaDesde}
        actualizarFechaHasta={actualizarFechaHasta}
      />
      <div>
        {mostrarListaFiltrada.length === 0 ? (
          <Error />
        ) : (
          <ListaHoteles mostrarListaFiltrada={mostrarListaFiltrada} />
        )}
      </div>
    </div>
  );
}

