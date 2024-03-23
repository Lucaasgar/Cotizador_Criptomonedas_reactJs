import { useState } from "react"

const useSelectMonedas = (label, opciones) => {
    const [state, setState] = useState('')

    const SelectMoneda = () => (
        <>
            <label className="block text-white text-2xl font-bold my-4">
                {label}
            </label>
            <select 
                className=" w-full text-lg py-3 rounded-xl"
                value={state}
                onChange={e => setState(e.target.value)}    
            >
                <option value="">Seleccione</option>

                {opciones.map( opcion => (
                    <option 
                        value={opcion.id}
                        key={opcion.id}
                    >{opcion.nombre}</option>
                ))}
            </select>
        </>
    )

  return [ state, SelectMoneda ]
}

export default useSelectMonedas