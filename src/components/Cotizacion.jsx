

const Cotizacion = ({cotizacion}) => {
    const { CHANGEPCT24HOUR, HIGHDAY, IMAGEURL, LASTUPDATE, PRICE, LOWDAY } = cotizacion

    return (
    <div 
        className="text-white flex  max-md:flex-col flex-row max-w-4xl mx-auto font-mono items-center justify-center"
    >
        <img 
            src={`https://cryptocompare.com/${IMAGEURL}`} 
            alt="Imagén Criptomoneda" 
            className="sm:w-80 mx-5"    
        />
        <div
            className=""
        >
            <p
                className="text-3xl text-center "
            >El Precio es de: 
                <span
                    className="font-bold"
                > {PRICE}
                </span>
            </p>

            <p
                className=" text-lg"
            >Precio mas alto del dia: 
                <span
                    className="font-bold" 
                > {HIGHDAY}</span>
            </p>
            
            <p
                className=" text-lg"
            >Precio mas bajo del dia: 
                <span
                    className="font-bold"
                > {LOWDAY}</span>
            </p>
            
            <p
                className=" text-lg"
            >Variacion ultimas 24 horas: 
                <span
                    className="font-bold"
                > {CHANGEPCT24HOUR}</span>
            </p>
            
            <p
                className=" text-lg"
            >Ultima actualización: 
                <span
                    className="font-bold"
                >{LASTUPDATE}</span>
            </p>
        </div>
    </div>
  )
}

export default Cotizacion