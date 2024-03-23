import useSelectMonedas from "../hooks/useSelectMoneda"
import { useEffect, useState } from "react"

import { monedas } from "../data/monedas"
import Error from "./Error"

const Formulario = ({setMonedas}) => {
    const [error, setError] = useState(false)
    
    const [cripto, setCripto] = useState([])

    const [ moneda, SelectMoneda ] = useSelectMonedas('Elige tu moneda:', monedas)
    const [ criptomoneda, SelectCripto ] = useSelectMonedas('Elige tu criptomoneda:', cripto)

    useEffect(() => {
        const consultarAPI = async () => {
            const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD"
            const res = await fetch(url)
            const resultado = await res.json()

            const ArrayCriptos = resultado.Data.map( (cripto) => {
                const obj = {
                    id: cripto.CoinInfo.Name,
                    nombre: cripto.CoinInfo.FullName
                }
                return obj
            })

            setCripto(ArrayCriptos)
        }
        consultarAPI()
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()

        if([criptomoneda, moneda].includes('')){
            console.log('Formulario incompleto o vacio.')
            setError(true)
            return
        }
        setError(false)
        setMonedas({
            moneda,
            criptomoneda
        })

       
    }

    return (    
        <>
            {error && <Error>Todos los campos son obligatorios</Error>}
            <form
                onSubmit={handleSubmit}
            >
                <SelectMoneda></SelectMoneda>
                <SelectCripto></SelectCripto>

                <input 
                    type="submit"
                    value={"Cotizar"} 
                    className="bg-sky-600 cursor-pointer w-full rounded-md text-white font-bold py-1 uppercase hover:bg-sky-500 transition text-xl my-8"
                />
            </form>
        </>
        
    )
}

export default Formulario