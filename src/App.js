import React, {Fragment, useState, useEffect} from 'react';
import Headers from './components/Headers';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNotificas';


function App() {

  const [categoria, setCategoria] = useState('');
  const [noticias, setNoticicas] = useState([])

  useEffect(() => {
    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=4e930153720a4d71bcbb5c5bec0d64e2`;
      const respuesta = await fetch(url);
      const noticias = await respuesta.json();
      setNoticicas(noticias.articles)
    }
    consultarAPI();
  }, [categoria])

  return (
    <Fragment>
      <Headers
        titulo="Buscador de Noticias"></Headers>
      <div className="container white">
        <Formulario setCategoria={setCategoria}></Formulario>
        <ListadoNoticias noticias={noticias}></ListadoNoticias>
      </div>
    </Fragment>
  );
}

export default App;
