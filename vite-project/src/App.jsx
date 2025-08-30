import './App.css'
import { Cabecalho, Conteudo } from './components/cabecalho/Cabecalho'

const App = () => {
  return (
    <>
      <Cabecalho nomeUsuario="Joana"/>
      <Conteudo>
        <h1>Titulo</h1>
        <p>Texto texto texto</p>
      </Conteudo>
    </>
  )
}

export { App }
