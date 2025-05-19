'use client'
import { useEffect, useState } from 'react'
import ProductoCard from '../../components/ProductoCard'

const productos = [
        {
  nombre: "Aerocamara Aero 100 C/Masc. Adulto Nacional",
  codigo: "01015",
  precio: 4500,  // Precio en pesos argentinos (ejemplo)
  descripcion: "Aerocámara con máscara para adulto, facilita la inhalación de medicación respiratoria con diseño ergonómico y materiales resistentes.",
  rubro: "Vias Aereas-Neumonologia",
},
{
  nombre: "Aerocamara Aero 100 C/Masc. Pediat. Nacional",
  codigo: "01014",
  precio: 4300,  // Precio en pesos argentinos (ejemplo)
  descripcion: "Aerocámara con máscara para pediatría, diseñada para un ajuste cómodo en niños, mejorando la efectividad del tratamiento inhalatorio.",
  rubro: "Vias Aereas-Neumonologia",
},
{
  nombre: "Bandeja Acanalada Ac. Inox",
  codigo: "02144",
  precio: 3200,
  descripcion: "Bandeja acanalada de acero inoxidable, ideal para uso hospitalario y de laboratorio, resistente y fácil de limpiar.",
  rubro: "Acero Inoxid",
},
{
  nombre: "Tambor 16/12 AC. Inox",
  codigo: "02243",
  precio: 5800,
  descripcion: "Tambor de acero inoxidable de 16 litros con cierre hermético, apto para almacenamiento seguro de materiales médicos.",
  rubro: "Acero Inoxid",
},
{
  nombre: "Caja 22/12/5 Ac. Inox",
  codigo: "02105",
  precio: 4300,
  descripcion: "Caja de acero inoxidable con medidas 22x12x5 cm, utilizada para esterilización y transporte de instrumentos médicos.",
  rubro: "Acero Inoxid",
},
{
  nombre: "Tambor 28/25 Ac.Inox",
  codigo: "02250",
  precio: 8200,
  descripcion: "Tambor grande de acero inoxidable de 28 litros, resistente a la corrosión, adecuado para ambientes clínicos e industriales.",
  rubro: "Acero Inoxid",
},
{
  nombre: "Agujas Acupuntura ",
  codigo: "03361",
  precio: 750,
  descripcion: "Set de agujas para acupuntura, fabricadas con acero inoxidable de alta calidad, esterilizadas y listas para uso clínico.",
  rubro: "Agujas Acupuntura y Accesorios",
},
{
  nombre: "Agujas Acupuntura ",
  codigo: "03275",
  precio: 680,
  descripcion: "Agujas finas para acupuntura, con recubrimiento especial para minimizar el dolor durante la aplicación.",
  rubro: "Agujas Acupuntura y Accesorios",
},
{
  nombre: "Cigarro Moxa S/Humo/Olor C/C Wuyan",
  codigo: "03464",
  precio: 1200,
  descripcion: "Cigarro de moxa sin humo ni olor, ideal para terapias de acupuntura, fabricado con ingredientes naturales.",
  rubro: "Agujas Acupuntura y Accesorios",
},
{
  nombre: "Microesferas Autoadhesivas",
  codigo: "03591",
  precio: 450,
  descripcion: "Microesferas autoadhesivas para terapia de acupuntura, fáciles de aplicar y con efecto prolongado.",
  rubro: "Agujas Acupuntura y Accesorios",
},
{
  nombre: "Agujas Acupuntura ",
  codigo: "03363",
  precio: 770,
  descripcion: "Agujas de acupuntura estériles, con punta redondeada para una aplicación segura y eficaz.",
  rubro: "Agujas Acupuntura y Accesorios",
},
{
  nombre: "Agujas Acupuntura ",
  codigo: "03349",
  precio: 730,
  descripcion: "Juego de agujas de acupuntura con recubrimiento antimicrobiano para mayor higiene.",
  rubro: "Agujas Acupuntura y Accesorios",
},
{
  nombre: "Cigarro Moxa S/Humo/Olor C/C Wuyan",
  codigo: "03463",
  precio: 1150,
  descripcion: "Cigarro de moxa sin humo ni olor, especialmente diseñado para terapias de acupuntura sensibles.",
  rubro: "Agujas Acupuntura y Accesorios",
},
{
  nombre: "Microesferas Autoadhesivas",
  codigo: "03592",
  precio: 460,
  descripcion: "Microesferas autoadhesivas para tratamiento localizado en puntos de acupuntura, duraderas y efectivas.",
  rubro: "Agujas Acupuntura y Accesorios",
}



      ];

export default function Productos() {
  const [busqueda, setBusqueda] = useState('')
  const [filtrados, setFiltrados] = useState(productos)

  useEffect(() => {
    const texto = busqueda.toLowerCase()
    setFiltrados(
      productos.filter((p) =>
        [p.nombre, p.codigo, p.rubro].some((field) =>
          field.toLowerCase().includes(texto)
        )
      )
    )
  }, [busqueda])

  return (
    <section className="section"  style={{ padding: '2rem' }}>
      <h2 style={{ color: '#5060a8' }}>Productos</h2>
      <div className="filter-section">

        <input
          type="text"
          id="buscar"
          placeholder="Buscar producto..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
      </div>
      <div className="productos-grid">
        {filtrados.map((producto) => (
          <ProductoCard key={producto.codigo} producto={producto} />
        ))}
      </div>
    </section>
  )
}
