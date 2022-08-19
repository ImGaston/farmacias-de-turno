import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { Icon } from 'leaflet';
import useSWR from 'swr';
import icon from '/marker.png';
import 'leaflet/dist/leaflet.css';
import { Markers } from './Markers';

//TODO: map con el Maker para las farmacias de turno


export const MapList = ({ farmacias }) => {
    
    const IconMarker = new Icon({
        iconUrl: icon
    });

    return (
        <MapContainer center={[-34.54806386957799, -58.696168008616304]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[-34.53932470845837,-58.71547600632928]} icon={ IconMarker }>
                <Popup>
                <p>Farmacia Said | abierta 24hrs</p>
                <a target='_blank' href={'http://www.google.com/maps/place/-34.53932470845837,-58.71547600632928'}>Google Maps</a>
                </Popup>
            </Marker>
            <Marker position={[-34.55191851064897,-58.722759431276124]} icon={ IconMarker }>
                <Popup>
                <p>Farmacia Gaspar Campos | abierta 24hrs</p>
                <a target='_blank' href={'http://www.google.com/maps/place/-34.55191851064897,-58.722759431276124'}>Google Maps</a>
                </Popup>
            </Marker>
            <Markers farmacias={ farmacias }/>
        </MapContainer>
    )
}
