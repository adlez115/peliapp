import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Pelicula from './Pelicula';
import PageWrapper from './PageWrapper';
import Paginacion from './Paginacion';

function ListadoPeliculas() {

	const [paginaActual, setPaginaActual] = useState(1); 
	const [peliculas, setPeliculas] = useState([]);
	const TOTAL_POR_PAGINA = 7;

	useEffect(()=> {
		buscarPeliculas();
	}, [])

	const  buscarPeliculas  = async ()  => {
		let url = 'https://cors-anywhere.herokuapp.com/https://raw.githubusercontent.com/lucasmoy-dev/Curso-de-React/main/Proyecto%202%20-%20Web%20de%20Peliculas/Proyecto%20Terminado/src/peliculas.json'

		let resultado = await fetch(url, {
			"method":'GET',
			"headers":{
				"Accept":'application/json',
				"Content-Type":'application-json',
				"Origin":'https://raw.githubusercontent.com/'
			}
		});
		let json = await resultado.json();
		setPeliculas(json);
	}
	

	const getTotalPaginas= () => {
		let cantidadTotalDePeliculas = peliculas.length;
		return Math.ceil(cantidadTotalDePeliculas / TOTAL_POR_PAGINA);
	}

	let peliculasPorPagina = peliculas.slice((paginaActual - 1) * TOTAL_POR_PAGINA, paginaActual * TOTAL_POR_PAGINA)


  return (
	<PageWrapper>
		

		{peliculasPorPagina.map(pelicula => 
			
			<Pelicula titulo={pelicula.titulo} 
			calificacion={pelicula.calificacion} director={pelicula.director}  
			actores={pelicula.actores} 
			fecha={pelicula.fecha} 
			duracion={pelicula.duracion}
			img={pelicula.img}
			>
				{pelicula.descripcion}
			</Pelicula>
		)}
		
	<Paginacion pagina={paginaActual} total={getTotalPaginas()} onChange={(pagina)=>{
		setPaginaActual(pagina);
	}}/>
	</PageWrapper>
  );
}

export default ListadoPeliculas;