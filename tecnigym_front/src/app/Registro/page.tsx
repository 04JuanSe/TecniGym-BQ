"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import "../assistens/registro.css"

export default function Registro() {
  const router = useRouter();
  // Estados para guardar los datos del formulario
  const [usuario, setUsuario] = useState("");
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [mensaje, setMensaje] = useState(""); //mostramos un mensaje al usuario

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try { // configuracion del back con el fron
      const res = await fetch('http://localhost:3001/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nombre: usuario,            // o directamente el string si no usas estado
          correo: email,
          contraseña: contraseña
        })
      });
      const data = await res.json();
      if (res.ok) {
        // Si el back responde con exito
        setMensaje("✅ Su usuario se ha registrado con éxito.")
        setUsuario("");
        setEmail("");
        setContraseña("");

        // Redirige al login
        setTimeout(() => router.push("/Login"), 1500);
      } else {
        // hubo un error
        setMensaje(`❌ ${data.mensaje}`)
      }
    } catch (error) {
      //Si hay un error al conectar con el back
      console.error("Error al reguistrar:", error);
      setMensaje("❌ Error al conectar con el servidor.")
    }
  }

  return (
    <header className="bg-dark py-5 min-vh-100">
      <div className="container px-4 px-lg-5 my-5">
        <div className="text-white text-center">
          <h1 className="mb-4">Registro de Usuario</h1>

          <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: "400px" }}>
            {/* Campo usuario */}
            <div className="mb-3 text-start">
              <label htmlFor="usuario" className="form-label">Usuario</label>
              <input
                type="text"
                id="usuario"
                className="form-control"
                placeholder="Tu nombre de usuario"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                required
              />
            </div>

            {/* Campo email */}
            <div className="mb-3 text-start">
              <label htmlFor="email" className="form-label">Correo electrónico</label>
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="correo@ejemplo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Campo contraseña */}
            <div className="mb-3 text-start">
              <label htmlFor="contraseña" className="form-label">Contraseña</label>
              <input
                type="password"
                id="contraseña"
                className="form-control"
                placeholder="Mínimo 6 caracteres"
                value={contraseña}
                onChange={(e) => setContraseña(e.target.value)}
                required
              />
            </div>

            {/* Botón de registro */}
            <button type="submit" className="btn btn-primary w-100 mt-3">
              Registrarse
            </button>

            {mensaje && (
              <div className="alert alert-info mt3" role="alert">
                {mensaje}
              </div>
            )}


            {/* Enlace para ir al login si ya tienes cuenta */}
            <p className="mt-4 text-white">
              ¿Ya tienes cuenta?{" "}
              <Link href="/Login" className="text-info text-decoration-underline">
                Inicia sesión
              </Link>
            </p>
          </form>
        </div>
      </div>
    </header>
  );
}
