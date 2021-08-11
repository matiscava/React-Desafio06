import React from 'react';
import CartWidget from './CartWidget';
import '../estilos.css';
import Logo from '../assets/img/LogoProvisorio.png';

const NavBar = () =>{
    return (<header>
        
            <img className='headerLogoImg' src={Logo} alt='Logo '/>
        <div className='headerContenedorLink'>
            <div className='headerLink'>
                HOME
            </div>
            <div className='headerLink'>
                CATEGORIAS
            </div>
            <div className='headerLink'>
                CONTACTO
            </div>
            <CartWidget />
        </div>
    </header>);
}
export default NavBar;