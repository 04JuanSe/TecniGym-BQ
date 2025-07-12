const express = require("express");
const router = express.Router();
const supabase = require("../supabase");

// Registro de usuario
router.post("/register", async (req, res) => {
  const { nombre, correo, contraseña } = req.body;
  console.log("📦 Registro - Datos recibidos:", req.body);

  if (!nombre || !correo || !contraseña) {
    return res.status(400).json({ mensaje: "Todos los campos son obligatorios." });
  }

  // Insertar en Supabase
  const { error } = await supabase
    .from("usuarios")
    .insert([{ nombre, correo, contraseña }]);

  if (error) {
    console.error("❌ Error al insertar usuario:", error);
    return res.status(500).json({ mensaje: "Error al registrar usuario." });
  }

  console.log("✅ Usuario insertado con éxito.");
  res.status(201).json({ mensaje: "Usuario registrado correctamente." });
});

// Login de usuario
router.post('/login', async (req, res) => {
  console.log("📦 Login - Datos recibidos:", req.body);

  const correo = req.body.correo?.trim().toLowerCase();
  const contraseña = req.body.contraseña?.trim();

  if (!correo || !contraseña) {
    return res.status(400).json({ mensaje: "Correo y contraseña son obligatorios." });
  }

  const { data: usuario, error } = await supabase
    .from('usuarios')
    .select('nombre, correo') // Solo selecciona lo necesario
    .eq('correo', correo)
    .eq('contraseña', contraseña)
    .maybeSingle(); // <- permite 0 o 1 resultados, evita error

  if (error) {
    console.error("❌ Error al iniciar sesión:", error);
    return res.status(500).json({ mensaje: "Error al iniciar sesión.", error });
  }

  if (!usuario) {
    return res.status(401).json({ mensaje: "Correo o contraseña incorrectos." });
  }

  res.status(200).json({
    mensaje: "✅ Inicio de sesión exitoso.",
    usuario: usuario.nombre,
    correo: usuario.correo
  });
});

module.exports = router;

