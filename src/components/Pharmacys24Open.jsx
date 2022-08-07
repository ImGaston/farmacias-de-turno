
const  Pharmacys24Open = () => {
    const pharmacys24Open = [{
        id: '38',
        nombre: 'Said',
        direccion: 'Av.Pte. Perón 1874, San Miguel, Provincia de Buenos Aires',
        coordenadas: '-34.53932470845837,-58.71547600632928',
    },
    {
        id: '39',
        nombre: 'Gaspar Campos',
        direccion: 'Av. Dr. Ricardo Balbín 2506, San Miguel, Provincia de Buenos Aires',
        coordenadas: '-34.55191851064897,-58.722759431276124',
    }]
    
    return (
        <>
            {
                pharmacys24Open.map(({id, nombre, direccion, coordenadas}) => (
                    <div className='card' key={id}>
                        <h3>{nombre}</h3>
                        <p>Dirección: {direccion}</p>
                        <a target='_blank' href={'http://www.google.com/maps/place/' + coordenadas}>Google Maps</a>
                    </div>
                ))
            }
        </>
    )
}

export default Pharmacys24Open