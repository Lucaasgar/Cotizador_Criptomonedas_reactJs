import { useEffect, useState } from "react"
import Formulario from "./components/Formulario"
import Cotizacion from "./components/Cotizacion"
import Spinner from "./components/Spinner"


function App(){
 
  const [monedas, setMonedas] = useState({})
  const [cotizacion, setCotizacion] = useState({})
  const [cargando, setCargando] = useState(false)

  useEffect( () => {
    if(Object.keys(monedas).length > 0){
      setCotizacion({})
      setCargando(true)
      const { moneda, criptomoneda} = monedas
    
      const cotizarAPI = async () => {
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`

        const res = await fetch(url)
        const resultado = await res.json()

        setCotizacion(resultado.DISPLAY[criptomoneda][moneda])
        setCargando(false)
      }
      cotizarAPI()
    }
  }, [monedas])

  return (  
    <>
      <div className="max-w-4xl mx-auto font-mono md:grid grid-cols-2 gap-x-8 w-4/5">
        <img 
          src="../public/img/imagen-criptos.png" 
          alt="Imagen cripto" 
          className="max-w-md w-4/5 mt-24 mx-auto mb-0 block"  
        />
      
        <div>
          <h1 
            className="text-center text-white font-bold uppercase text-3xl mt-20 mb-12" 
          >
            Cotiza Criptomonedas al instante
          </h1>

          <Formulario
            setMonedas={setMonedas}
          ></Formulario>

        </div>      
      </div>
      {cargando && <Spinner/>}
      {cotizacion.PRICE && <Cotizacion cotizacion={cotizacion} />}
    </>
  )
}

export default App
