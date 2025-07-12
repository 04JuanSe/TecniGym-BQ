"use client";
import "../assistens/login.css"
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";
// Importamos React y el hook useState para manejar el estado local del formulario

export default function Login() {
  const [user, setUser] = useState({ correo: "", contraseña: "" });
  const [mensaje, setMensaje] = useState("");
  const router = useRouter();

  // Detectar si hay una sesión activa
  useEffect(() => {
    const sesion = localStorage.getItem("usuario");
    if (sesion) {
      router.push("/Inicio");
    }
  }, []);


  // Actualiza el campo "correo"
  function fillCorreo(correo: string) {
    setUser({
      ...user,
      correo
    });
  }

  // Actualiza el campo "contraseña"
  const fillPassword = (contraseña: string) => {
    setUser({
      ...user,
      contraseña
    });
  };

  // se ejecuta al enviar el formulario
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3001/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          correo: user.correo.trim().toLowerCase(),
          contraseña: user.contraseña.trim()
        }),
      });
      const data = await res.json();

      if (res.ok) {
        setMensaje(`✅ Bienvenido, ${data.usuario}`);

        // Guardamos usuario en localStorage
        localStorage.setItem("usuario", JSON.stringify({ nombre: data.usuario, correo: user.correo }));
        // Esto recarga la página completa
        window.location.href = "/Inicio";
        // Redirige después de un momento
        setTimeout(() => router.push("/Inicio"), 1500);
      } else {
        setMensaje(`❌ ${data.mensaje}`);
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      setMensaje("❌ Error al conectar con el servidor.");
    }
  };


  return (
    <main className="login-container">
      <div className="login-box">
        <h2 className="login-title">Iniciar sesión</h2>

        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Correo electrónico</label>
            <input
              type="email"
              id="email"
              placeholder="Ingresa tu correo"
              value={user.correo}
              onChange={(e) => fillCorreo(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              placeholder="Ingresa tu contraseña"
              value={user.contraseña}
              onChange={(e) => fillPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn-login">
            Iniciar sesión
          </button>
          {/* Botón que envía el formulario */}
          <div className="contenedorRegistro">
            <p>
              ¿No tienes cuenta?{" "}
              <Link href="/Registro" className="Registro">
                Regístrate
              </Link>
            </p>
          </div>
          {mensaje && (
            <p className="mt-3 text-whit text-venter">{mensaje}</p>
          )}
        </form>
      </div>
    </main>
  );
}
