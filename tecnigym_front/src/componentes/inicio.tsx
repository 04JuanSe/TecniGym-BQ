"use client";
import React, { useEffect, useState } from "react";
import Link from 'next/link';
import Image from 'next/image';
import equipoImg from "../../public/imagenes/Imagen de WhatsApp 2025-07-10 a las 16.16.36_763ce9dc.jpg" // Asegúrate de que la ruta sea correcta

export default function Inicio() {
    const [nombreUsuario, setNombreUsuario] = useState("");

    useEffect(() => {
        const nombre = localStorage.getItem("usuario");
        if (nombre) {
            setNombreUsuario(nombre);
        }
    }, []);

    return (
        <section className="inicio">
            <div className="container-inicio">
                <div className="inicioIzquierdo">{/* Columna izquierda: texto*/}
                    <h1><span className="nombre">Bienvenido a TecniGym BQ</span></h1>
                    <h2> Los mejores en nuestra área</h2>
                    <p>Equipamiento de última generación para gimnasios,
                        <br />centros deportivos y uso doméstico.
                        <br /> Calidad profesional con garantía.</p>

                    {/* Botones de acción */}
                    <div className="botones">
                        <Link href="/" className="btn-primario">
                            Ver Productos →
                        </Link>
                        <Link href="/" className="btn-secundario">
                            Contáctanos →
                        </Link>
                    </div>
                    {/* Estadísticas destacadas */}
                    <div className="stats">
                        <div>
                            <h3>500+</h3>
                            <p>Clientes Satisfechos</p>
                        </div>
                        <div>
                            <h3>50+</h3>
                            <p>Modelos Disponibles</p>
                        </div>
                        <div>
                            <h3>24/7</h3>
                            <p>Soporte</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="inicioDerecho">{/* Columna derecha: imagen del equipo */}
                <div className="imagenEquipo">
                    <Image src={equipoImg} alt="imagen de equipo " className="img-responsiva" />
                    <h4><br /></h4>

                </div>
            </div>
        </section >
    )
}
