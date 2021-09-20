import React from "react";

function Header({
  lugar,
  precio,
  tamanio,
  desdeNatural,
  hastaNatural
}) {
  return (
    <header className="header">
      <h1 className="title">Hoteles</h1>
      <p className="parrafo">
        Desde {desdeNatural} - Hasta {hastaNatural} <br />
        En {lugar} <br />
        De {precio} <br />
        De {tamanio}
      </p>
    </header>
  );
}

export default Header;
