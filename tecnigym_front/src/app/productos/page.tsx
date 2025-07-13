"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Productos() {
  const [usuario, setUsuario] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const datosUsuario = localStorage.getItem("usuario");
    if (datosUsuario) {
      setUsuario(JSON.parse(datosUsuario));
    }
  }, []);

  return (
    <main style={{ padding: "2rem", textAlign: "center" }}>
      <h1 className="text-2xl font-bold mb-4">Nuestros Productos</h1>

      {usuario ? (
        <div>
          <p>👋 Bienvenido, {usuario.nombre}.</p>
          <p className="mt-2">Aquí pronto podrás ver tus productos disponibles.</p>
        </div>
      ) : (
        <div>
          <p>🚫 Señor usuario, aún no ha iniciado sesión.</p>
          <p className="mt-2">Pronto podrá ver nuestros proximos productos.</p>
        </div>
      )}
    </main>
  );
}

