import React from 'react';
import '../estilos.css';
import '../Iconos3/style.css';


class CartWidget extends React.Component{
    
    render(){
        return(
            <div>
                <div className='headerContenedorSpan'>
                    <span className='NavBarSpan IconoSocial-shopping-cart'></span>
                </div> 
            </div>
        )
    }
}

export default CartWidget;

