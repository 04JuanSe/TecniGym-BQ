"use client"

import WhyChooseUs from "../../componentes/WhyChooseUs";
import "../assistens/styles.css";
import React, { useEffect, useState } from "react";

export default function SobreNosotros() {
  const [usuario, setUsuario] = useState("");

  useEffect(() => {
    const sessionData = localStorage.getItem("usuario");
    if (sessionData) {
      const user = JSON.parse(sessionData);
      setUsuario(user.nombre);
    }
  }, []);
  return (
    <header className="bg-dark py-5">
      <div className="container px-4 px-lg-5 my-5">
        <div className="text-center text-white">
          <h1 className="display-4 fw-bolder">TecniGym BQ</h1>
        </div>
        <div>
          <h1>Sobre Nosotros</h1>
          {usuario && <p>👋 Hola, {usuario}. Gracias por visitarnos.</p>}
          {!usuario && <p>👋 Bienvenido visitante. Por favor inicia sesión para más funciones.</p>}

          <WhyChooseUs />
        </div>
      </div>
    </header>
  )
}
