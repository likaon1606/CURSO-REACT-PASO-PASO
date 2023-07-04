import { useState } from "react";
import Contexto from "./Contexto";

const valores = [
  {
    titulo: "Aprende React intensivamente con una profesora nativa",
    texto: "2 semanas. Una profesora solo para ti (12h/día)",
    boton1: "Profesora",
    nombre: "Marta Ríos",
    foto: "prof-spain.jpg",
    boton2: "Lugar",
    direccion: "48 St Laurent Boulevard, Montreal, Cánada",
  },
  {
    titulo: "Learn React intensively with a native teacher",
    texto: "2 weeks. A teacher just for you (12h/day)",
    boton1: "Teacher",
    nombre: "Garce Trembley",
    foto: "prof-english.jpg",
    boton2: "Location",
    direccion: "65 Stonehaven, Ottawa, Cánada",
  },
  {
    titulo: "2 semaines. Un professeur rien que pour vous (12h/jour)",
    texto: "2 semaines. Un professeur rien que pour vous (12h/jour)",
    boton1: "Professeur",
    nombre: "Aimée Mathieu",
    foto: "prof-france.jpg",
    boton2: "Emplacement",
    direccion: "2700 Rue Jean-Perrin #190, Québec, Cánada",
  },
  {
    idioma: 0,
  },
];

const Provider = ({ children }) => {
  const [alumno, setAlumno] = useState(valores);
  return (
    <Contexto.Provider value={{ alumno, setAlumno }}>
      {children}
    </Contexto.Provider>
  );
};

export default Provider;
