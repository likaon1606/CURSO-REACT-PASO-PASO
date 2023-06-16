import React from "react";

const Map = () => {
  const reyes = [
    {
      nombre: "Atanagildo",
      reinado: 15,
      vacasComidas: 9,
    },
    {
      nombre: "Ervigio",
      reinado: 7,
      vacasComidas: 3,
    },
    {
      nombre: "Ataúlfo",
      reinado: 5,
      vacasComidas: 16,
    },
    {
      nombre: "Leovigildo",
      reinado: 18,
      vacasComidas: 3,
    },
    {
      nombre: "Sisebuto",
      reinado: 9,
      vacasComidas: 13,
    },
    {
      nombre: "Recesvinto",
      reinado: 19,
      vacasComidas: 11,
    },
    {
      nombre: "Teodorico",
      reinado: 33,
      vacasComidas: 12,
    },
  ];

  //*---- filter y map-------

  const resultado1 = reyes
    .filter((valor) => valor.vacasComidas >= 10 && valor.vacasComidas <= 12)
    .map((valor) => (
      <div key={valor.nombre}>
        {valor.nombre} come ${valor.vacasComidas} vacas al día
      </div>
    ));

  //*---- find ------ Encuentra la primer coincidencia

  const resultado2 = reyes.find(
    (valor) => valor.vacasComidas >= 10 && valor.vacasComidas <= 12
  );

  //*---- includes--- encuentra la primer coincidencia, según lo buscado ej: 'au' que contenga 'au'

  const resultado3 = reyes.find((valor) => valor.nombre.includes("ú"));

  return (
    <>
      <div className='caja'>{resultado1}</div>
      <div className='metodoFind' style={{ color: "orange" }}>
        {resultado2.nombre} come {resultado2.vacasComidas} al día
      </div>
      <div className='metodoIncludes' style={{ color: "blue" }}>
        {resultado3.nombre} come {resultado3.vacasComidas} al día
      </div>
    </>
  );
};

export default Map;
