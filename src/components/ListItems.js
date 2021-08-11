import React from 'react';
// import Imagenes from '../assets/Imagenes';
import '../estilos.css';
import Item from './Item';
import ImgBilletera01 from '../assets/img/billeteras/Billetera03.webp';
import ImgBilletera02 from '../assets/img/billeteras/Billetera02.webp';
import ImgBilletera03 from '../assets/img/billeteras/Billetera04.webp';
import ImgBilletera04 from '../assets/img/billeteras/Billetera01.webp';
import ImgBilletera05 from '../assets/img/billeteras/Billetera05.webp';
import ImgCinturon01 from '../assets/img/cinturones/Cinturon01.webp';
import ImgCinturon02 from '../assets/img/cinturones/Cinturon04.webp';
import ImgCinturon03 from '../assets/img/cinturones/Cinturon02.webp';
import ImgCinturon04 from '../assets/img/cinturones/Cinturon03.webp';


const billeteras = [
    // {
        // 'Billetera': [
            {
                'id':1,
                'nombre': 'Billetera Rusty Simplicity Marron',
                'precio': 3890,
                'stock': 10,
                'marca': 'Rusty',
                'modelo':'Simplicity',
                'imgURL': ImgBilletera01,
                'alt': 'ImgBilletera01'
            },
            {
                'id':2,
                'nombre': 'Billetera Hombre Duogan Tarjetero Monedero Eco Cuero',
                'precio': 2280,
                'stock': 6,
                'marca': 'Duogan',
                'modelo':'Retro',
                'imgURL': ImgBilletera02,
                'alt': 'ImgBilletera02'
            },
            {
                'id':3,
                'nombre': 'Billetera Bioworld PlayStation One grey poliéster y poliuretano',
                'precio': 1890,
                'stock': 3,
                'marca': 'Bioworld',
                'modelo':'PlayStation One',
                'imgURL': ImgBilletera03,
                'alt': 'ImgBilletera03' 
            },
            {
                'id':4,
                'nombre': 'Billetera Walla Vintage black y silver cuero',
                'precio': 4899,
                'stock': 6,
                'marca': 'Walla',
                'modelo':'Vintage',
                'imgURL': ImgBilletera04,
                'alt': 'ImgBilletera04'
            },
            {
                'id':5,
                'nombre': 'Billetera Los Robles Polo Time 0076 marrón cuero',
                'precio': 5990,
                'stock': 7,
                'marca': 'Los Robles',
                'modelo':'Polo Time',
                'imgURL': ImgBilletera05,
                'alt': 'ImgBilletera05'
            }
    //     ]
    // }
];

const cinturones = [
    {
        'id':6,
        'nombre': 'Cinturones Cinto De Cuero Hombre Talles Grandes Hasta 180cm',
        'precio': 1850,
        'stock': 11,
        'marca': 'Jonaro Jeans',
        'modelo':'Cinturon liso de cuero',
        'imgURL': ImgCinturon01,
        'alt': 'ImgCinturon01'
    },
    {
        'id':7,
        'nombre': 'Cintos Hombre Studebaker Cuero Vaqueta Hebilla Gastada',
        'precio': 1024,
        'stock': 5,
        'marca': 'Studebaker',
        'modelo':'Casual',
        'imgURL': ImgCinturon02,
        'alt': 'ImgCinturon02'
    },
    {
        'id':8,
        'nombre': 'Cinturones Cinto De Cuero Hombre Con Tachas',
        'precio': 1780,
        'stock': 21,
        'marca': 'Jonaro Jeans',
        'modelo':'Cinturon Remache',
        'imgURL': ImgCinturon03,
        'alt': 'ImgCinturon03'
    },
    {
        'id':9,
        'nombre': 'Cinturón De Vestir Hombre Cuero Reversible Talle Especial',
        'precio': 1899,
        'stock': 2,
        'marca': 'Fabricantes Directos',
        'modelo':'Moderno',
        'imgURL': ImgCinturon04,
        'alt': 'ImgCinturon04'
    }
];


// const btnBilleteras = document.querySelector('#BtnBilleteras');
// const btnCinturones = document.querySelector('#BtnCinturones');
// const btnTodos = document.querySelector('#BtnTodos');
let productos = [];
billeteras.map((producto)=>{
    productos.push(producto);
    return producto
});
cinturones.map((producto)=>{
    productos.push(producto);
    return producto
});



// btnBilleteras.addEventListener('click',()=>{
//     array = [];
//     console.log('hola')
//     billeteras.map((producto)=>{
//         array.push(producto);
//         return producto
//     });
//     console.log(array)
//  });

// btnCinturones.addEventListener('click',()=>{
//     array = [];
//     console.log('hola')
//     cinturones.map((producto)=>{
//         array.push(producto);
//         return producto
//     });
//     console.log(array)
// })

class ListItems extends React.Component{
    constructor(props){
        super(props);
        this.state={array: productos};
    };
    
    cargarCategoriasCinturones(){
        const divCargando =document.querySelector('#cargandoCategorias');
        const promesa = ()=>
         new Promise ((resolve)=>{
            this.setState({array:[]});
            divCargando.style.display= 'block';
            divCargando.innerHTML= 'Cargando.';
            setTimeout(()=>{
                divCargando.innerHTML= 'Cargando..';
            },500)
            setTimeout(()=>{
                divCargando.innerHTML= 'Cargando...';
            },1500)
            setTimeout(()=>{
                resolve(cinturones);
                divCargando.style.display= 'none';
            }, 2000);
        })
        promesa().then((result)=>{
            this.setState({array:result})
        })
    }
    cargarCategoriasTodos(){
        const divCargando =document.querySelector('#cargandoCategorias');
        const promesa = ()=>
         new Promise ((resolve)=>{
            this.setState({array:[]});
            divCargando.style.display= 'block';
            divCargando.innerHTML= 'Cargando.';
            setTimeout(()=>{
                divCargando.innerHTML= 'Cargando..';
            },500)
            setTimeout(()=>{
                divCargando.innerHTML= 'Cargando...';
            },1500)
            setTimeout(()=>{
                resolve(productos);
                divCargando.style.display= 'none';
            }, 2000);
        })
        promesa().then((result)=>{
            this.setState({array:result})
        })
    }
    cargarCategoriasBilleteras(){
        const divCargando =document.querySelector('#cargandoCategorias');
        const promesa = ()=>
         new Promise ((resolve)=>{
            this.setState({array:[]});
            divCargando.style.display= 'block';
            divCargando.innerHTML= 'Cargando.';
            setTimeout(()=>{
                divCargando.innerHTML= 'Cargando..';
            },500)
            setTimeout(()=>{
                divCargando.innerHTML= 'Cargando...';
            },1500)
            setTimeout(()=>{
                resolve(billeteras);
                divCargando.style.display= 'none';
            }, 2000);
        })
        promesa().then((result)=>{
            this.setState({array:result})
        })
    }
    render(){
        return (
            <div className="contenedorCategorias">
                <div className="listadoCategorias">
                    <div className="btnCategoria" id='BtnTodos' onClick={this.cargarCategoriasTodos.bind(this)}>
                        Todos los Productos
                    </div>
                    <div className="btnCategoria" id='BtnBilleteras' onClick={this.cargarCategoriasBilleteras.bind(this)}>
                        Billeteras
                    </div>
                    <div className="btnCategoria" id='BtnCinturones' onClick={this.cargarCategoriasCinturones.bind(this)}>
                        Cintrunes
                    </div>
                </div>
                <div id='cargandoCategorias'></div>
                <div class='contenedorItems'>
                    {this.state.array.map(a=>(
                        <Item img={a.imgURL} alt={a.alt} nombre={a.nombre} precio={a.precio} stock={a.stock} id={a.id}></Item>
                    ))
                    }
                </div>
            </div>
        )
    }
}

export default ListItems;