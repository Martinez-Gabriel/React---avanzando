import React, {useState, useContext} from 'react';
import { CarritoContext } from '../../components/context/CarritoContext';
import Swal from 'sweetalert2';

const mostrarAlerta = () => {
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Se agrego el producto al carrito!',
    showConfirmButton: false,
    timer: 1700
  })
}

const DetalleProducto = ({producto}) => {
  const [cantidad, setCantidad] = useState(1);
    
    const {carrito, agregarProducto, quitarProducto} = useContext(CarritoContext)

    const cantProducto = (operacion) => {
      if(operacion == "+") {
          if(cantidad < producto[1].stock) {
            setCantidad(cantidad + 1)
          }   
      } else {
        if(cantidad > 1) {
          setCantidad(cantidad - 1)
        }
    }
    
    

  }
    return (
        <>
        <div className='tamaño fluid' >  
          <div className="card mb-3 hola">
            
            <img src={producto[1].img} className="img-fluid rounded-start" alt={producto.nombre} />
              
            
            
          <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                      Pricipales Caracteristicas
                      </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample" style={{}}>
                      <div className="accordion-body"><p>{producto[1].caracteristicas}</p></div>
                  </div>
              </div>
          </div>
          </div>

          {/* Nombre del producto y precio */}
          <div className="card tamañoCardNombre">
            <div className="card-body">
              <h3 className="card-title d-flex justify-content-center">{producto[1].nombre}</h3>
              <h6 className="card-subtitle mb-2 text-muted m-2">Stock Disponible: {producto[1].stock}</h6>
              <h4 className='p-2 d-flex justify-content-center'>${producto[1].precio}</h4>
              <p className='card-text d-flex justify-content-center'>Cantidad: {cantidad}</p>
               <div className='d-flex justify-content-center'> 
                <button className='btn btn-light masMenosBtn' onClick={() => cantProducto("+")}>+</button>
                <button className='btn btn-dark masMenosBtn' onClick={() => cantProducto("-")}>-</button>
                <button type="button" className="btn btn-primary"   onClick={() => { agregarProducto(producto, cantidad); mostrarAlerta();}}>Añadir a carrito</button>
                </div>
              </div>
              
          <div className="card-body d-flex justify-content-center">
              <p className="card-text">{producto[1].miniDescripcion}</p>
            </div>
          </div>
      </div>
      </>
  

    
    );
}

export default DetalleProducto;

