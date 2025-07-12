"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import equipoImg from "../../public/imagenes/Imagen de WhatsApp 2025-07-10 a las 16.16.36_763ce9dc.jpg";
import { useRouter } from "next/navigation";


export default function Navbar({ children }: { children: React.ReactNode }) {
  const [usuarioAutenticado, setUsuarioAutenticado] = useState(false);
  const [usuario, setUsuario] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const sesion = localStorage.getItem("usuario");
    setUsuarioAutenticado(!!sesion);
    const datos = localStorage.getItem("usuario");
    if (datos) {
      const { nombre } = JSON.parse(datos);
      setUsuario(nombre);
    }
  }, []);

  const cerrarSesion = () => {
    localStorage.removeItem("usuario");
    window.location.href = "/Login";
        setUsuario(null);
    router.push("/Login");

  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container px-4 px-lg-5">
        <Link className="contenedorImagen" href="/Inicio">
          <Image src={equipoImg} alt="imagen de equipo " className="imagen" />
        </Link>
        {/* Botón para abrir menú colapsable en móviles */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* contenido del boton */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
            <li className="nav-item">
              <Link className="nav-link active" href="./Inicio">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="./SobreNosotros">
                Sobre Nosotros
              </Link>
            </li>
            {/* Menú desplegable llamado "menu" con varias opciones */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Menu
              </a>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                {usuarioAutenticado ? (
                  <>
                    <li><span className="dropdown-item-text">👋 {usuario}</span></li>
                    <li><button className="dropdown-item text-danger" onClick={cerrarSesion}>Cerrar sesión</button></li>
                  </>
                ) : (
                  <>
                    <li><Link className="dropdown-item" href="/Login">Login</Link></li>
                  </>
                )}
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#!">??</a></li>
                <li><a className="dropdown-item" href="#!">??</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
