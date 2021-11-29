import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Pagina from './pages/Pagina' //não precisa colocar o /index porque pelo nome do arquivo ser index, ele fica subtendido

export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Pagina/>} />
        <Route path="/pagina" element={<Pagina/>} />
      </Routes>
    </BrowserRouter>
  )
}
