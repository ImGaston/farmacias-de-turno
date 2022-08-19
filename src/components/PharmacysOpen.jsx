
const PharmacysOpen = ( { nombre, direccion, latitud, longitud } ) => { 
    return (
        <div className='card'>
            <h3>{nombre}</h3>
            <p>Dirección: {direccion}</p>
            <a target='_blank' href={'http://www.google.com/maps/place/' + latitud + ',' + longitud }>Google Maps</a>
            
        </div>
    )
}

export default PharmacysOpen;