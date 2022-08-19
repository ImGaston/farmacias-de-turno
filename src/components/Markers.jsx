import React from 'react'
import { Marker, Popup } from 'react-leaflet'
import { Icon } from 'leaflet';
// import 'leaflet/dist/leaflet.css';
// import icon from 'leaflet/dist/images/marker-icon.png';
import icon from '/marker.png';

export const Markers = ({ farmacias }) => {

    const IconMarker = new Icon({
        iconUrl: icon
    });

    console.log(farmacias)

    return (
        <>
            {
            farmacias.map((farmacias) => (
                <Marker key={ farmacias.id } position={[farmacias.latitud, farmacias.longitud]} icon={ IconMarker }>
                    <Popup>
                        <p>Farmacia { farmacias.nombre }</p>
                        <a target='_blank' href={'http://www.google.com/maps/place/' + farmacias.latitud + ',' + farmacias.longitud }>Google Maps</a>
                    </Popup>
                </Marker>
            ))
            }
        </>
    )
}
