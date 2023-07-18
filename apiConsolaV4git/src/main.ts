import axios from 'axios';

import readline from 'readline';

import {IRopa} from './ropa/ropa.interfaces';

//`https://fakestoreapi.com/products/${id}`

console.log('Busqueda de productos v0.0.1');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});


async function getDatosRopa(idropa:string) {
  try {
  
    //const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${idropa}`);
    const response = await axios.get(`https://fakestoreapi.com/products/${idropa}`);
    const ropa = response.data;

    //console.log(ropa);//aca salta toda la api para el id de idropa

    if (ropa.id==idropa){console.log('precio del producto : ', ropa.price );
                         console.log('titulo del producto : ', ropa.title );
                         console.log('categoria de la prenda : ', ropa. category);                   
                        };
   
  } catch (sinRopa) {
    console.error('sin Articulos');   
  }
}

const pedidosropaje = () => {
	rl.question('Ingrese el id de la prenda:', (id) => {
     
		getDatosRopa(id);


	});
};

pedidosropaje();
//con jasonplaceholder anda bien, cualquier cosa, cambiar la interfaz




