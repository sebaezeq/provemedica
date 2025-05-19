"use client";

import { useEffect, useState } from 'react';
import { jsPDF } from 'jspdf';

export default function Presupuesto() {
  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const carritoGuardado = JSON.parse(localStorage.getItem("carrito")) || [];
    setCarrito(carritoGuardado);
    const totalCalculado = carritoGuardado.reduce((acc, prod) => acc + prod.precio, 0);
    setTotal(totalCalculado);
  }, []);

  const generarPDF = () => {
    const doc = new jsPDF();

    doc.setFont("Arial", "bold");
    doc.setFontSize(16);
    doc.text("Provemedica", 105, 20, null, null, 'center');
    doc.setFont("Arial", "normal");
    doc.setFontSize(12);
    doc.text("Fecha: " + new Date().toLocaleDateString(), 105, 30, null, null, 'center');

    doc.text("Resumen de Presupuesto", 105, 40, null, null, 'center');
    doc.line(10, 45, 200, 45);

    doc.setFont("Arial", "bold");
    doc.text("Producto", 10, 50);
    doc.text("Código", 90, 50);
    doc.text("Precio", 150, 50);
    doc.line(10, 55, 200, 55);

    doc.setFont("Arial", "normal");
    carrito.forEach((producto, index) => {
      const y = 60 + index * 10;
      doc.text(producto.nombre, 10, y);
      doc.text(producto.codigo || '', 90, y);
      doc.text(`$${producto.precio}`, 150, y);
    });

    const totalY = 60 + carrito.length * 10 + 10;
    doc.line(10, totalY - 5, 200, totalY - 5);
    doc.setFont("Arial", "bold");
    doc.text("Total", 150, totalY);
    doc.text(`$${total}`, 170, totalY);

    doc.save("presupuesto_provemedica.pdf");
  };

  const vaciarCarrito = () => {
    localStorage.removeItem("carrito");
    setCarrito([]);
    setTotal(0);
  };

  return (
    <div>
      
      <section className="section">
        <h2>Presupuesto</h2>

        <div id="carrito">
          <h3>Resumen del carrito</h3>
          <ul id="carrito-lista">
            {carrito.map((producto, index) => (
              <li key={index}>
                {producto.nombre} - ${producto.precio}
              </li>
            ))}
          </ul>
          <p>Total: ${total}</p>
          <button onClick={generarPDF}>Generar PDF</button>
          <button onClick={vaciarCarrito}>Vaciar carrito</button>
        </div>
      </section>

    </div>
  );
}
