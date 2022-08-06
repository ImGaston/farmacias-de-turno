
const PharmacysOpen = ( { nombre, direccion, coordenadas } ) => { 
    return (
        <div className='card'>
            <h3>{nombre}</h3>
            <p>Dirección: {direccion}</p>
        </div>
    )
}

export default PharmacysOpen;