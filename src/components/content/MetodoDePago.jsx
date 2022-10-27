import React from 'react';

const Contacto = () => {
    return (
        <>
            <h1 className='containerProductos p-4'>Nuestros Metodos de pago</h1>

            <div className='containerMetodoDePago'>
                <div>
                    <img className='imgPagosStyle' src="https://firebasestorage.googleapis.com/v0/b/miapkgabriel.appspot.com/o/metodosDePagoImg%2Fvisa.webp?alt=media&token=e1b9a0e1-5723-4690-896f-ea7e87ee7a46" alt="imagen-visa" />
                    <h3 className='h3MetodosDePago'>Visa</h3>
                </div>
                <div>
                 <img className='imgPagosStyle'  src="https://firebasestorage.googleapis.com/v0/b/miapkgabriel.appspot.com/o/metodosDePagoImg%2FMastercard.png?alt=media&token=4b6b98ab-4682-4e0e-bbaf-2690e87a952c" alt="imagen-mastercard" />
                 <h3 className='h3MetodosDePago'>Master Card</h3>
                </div>
                <div>
                    <img className='imgPagosStyle'  src="https://firebasestorage.googleapis.com/v0/b/miapkgabriel.appspot.com/o/metodosDePagoImg%2FMPO.jpg?alt=media&token=3d722ec3-4dfc-48b7-9ee6-b11544a294bb" alt="imagen-mercadopago" />
                    <h3 className='h3MetodosDePago'>Mercado Pago</h3>
                </div>
            </div>
        </>
    );
}

export default Contacto;
