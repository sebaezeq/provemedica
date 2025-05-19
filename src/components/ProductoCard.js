export default function ProductoCard({ producto }) {
  const agregarAlCarrito = () => {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || []
    carrito.push({
      nombre: producto.nombre,
      codigo: producto.codigo,
      precio: producto.precio,
    })
    localStorage.setItem('carrito', JSON.stringify(carrito))
    alert(`Se agregó "${producto.nombre}" al carrito.`)
  }

  return (
    <div className="producto">
      <h3>{producto.nombre}</h3>
      <p><strong>Código:</strong> {producto.codigo}</p>
      <p><strong>Rubro:</strong> {producto.rubro}</p>
      <p><strong>Precio:</strong> ${producto.precio}</p>
      <button className="agregar" onClick={agregarAlCarrito}>Agregar al carrito</button>
    </div>
  )
}
