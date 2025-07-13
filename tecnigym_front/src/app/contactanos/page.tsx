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
      <h1 className="text-2xl font-bold mb-4">Contacta Con Nosotros</h1>

      {usuario ? (
        <div>
          <p>👋 Bienvenido, {usuario.nombre}.</p>
          <p className="mt-2">Aquí pronto podrás ver maneras de contactar con nuestro tecnico</p>
        </div>
      ) : (
        <div>
          <p>🚫 Señor usuario, aún no ha iniciado sesión.</p>
          <p className="mt-2">Pronto podrá contactar con nuestros tecnicos para ser asesorado</p>
        </div>
      )}
    </main>
  );
}