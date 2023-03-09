import React, { useEffect, useState } from 'react';
import './App.css';
import ListadoPeliculas from './ListadoPeliculas';
import { BrowserRouter, Route, Routes, Router} from 'react-router-dom';
import Blog from './Blog';

function App() {
	return(
		<BrowserRouter>
		<Routes>
			<Route path='/blog' element={<Blog/>}/>
			<Route path='/' element={<ListadoPeliculas/>}/>
		</Routes>
		</BrowserRouter>
	)
}

export default App;