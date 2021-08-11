import React from 'react';

const Item = ({img,alt,nombre,precio,stock,id})=>{
        return (
            <div className='contenedorItem' id={'tarjetaItem-'+id}>
                <div className='contendorImgItem'>
                    <img className='ItemImg' src={img} alt={alt} />
                </div>
                <p className='Item'>{nombre}</p>
                <p className='ItemPrecio'>$ {precio}</p>
                <p className='ItemStock'>Stock: {stock} </p>
            </div>
        );
    } 

export default Item;
