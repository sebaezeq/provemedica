// src/app/contacto/page.js
'use client';

export default function Contacto() {
  return (
    <main style={{ padding: '2rem' }}>
      <h2 style={{ color: '#5060a8' }}>Contacto</h2>
      <form
        action="mailto:infomed@provemedica.com.ar"
        method="post"
        encType="text/plain"
        style={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '600px',
          gap: '1rem'
        }}
      >
        <label>
          Apellido y Nombre
          <input type="text" name="nombre" required />
        </label>

        <label>
          Empresa / Ocupación
          <input type="text" name="empresa" />
        </label>

        <label>
          Teléfono
          <input type="tel" name="telefono" />
        </label>

        <label>
          Email
          <input type="email" name="email" required />
        </label>

        <label>
          Mensaje
          <textarea name="mensaje" rows="5" required />
        </label>

        <button type="submit" style={{ backgroundColor: '#5060a8', color: 'white', padding: '0.5rem 1rem' }}>
          Enviar
        </button>
      </form>
    </main>
  );
}
