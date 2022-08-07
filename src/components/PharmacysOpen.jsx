
const PharmacysOpen = ( { nombre, direccion, coordenadas } ) => { 
    return (
        <div className='card'>
            <h3>{nombre}</h3>
            <p>Dirección: {direccion}</p>
            <a target='_blank' href={'http://www.google.com/maps/place/' + coordenadas}>Google Maps</a>
            
        </div>
    )
}

export default PharmacysOpen;