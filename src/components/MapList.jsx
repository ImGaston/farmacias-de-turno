import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';

//TODO: map con el Maker para las farmacias de turno

export const MapList = ( props ) => {
    const IconMarker = new Icon({
        iconUrl: icon
    });
    console.log( props );
    return (
        <MapContainer center={[-34.54806386957799, -58.696168008616304]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[-34.53932470845837,-58.71547600632928]} icon={IconMarker}>
                <Popup>
                <p>Farmacia Said | abierta 24hrs</p>
                <a target='_blank' href={'http://www.google.com/maps/place/-34.53932470845837,-58.71547600632928'}>Google Maps</a>
                </Popup>
            </Marker>
            <Marker position={[-34.55191851064897,-58.722759431276124]} icon={IconMarker}>
                <Popup>
                <p>Farmacia Gaspar Campos | abierta 24hrs</p>
                <a target='_blank' href={'http://www.google.com/maps/place/-34.55191851064897,-58.722759431276124'}>Google Maps</a>
                </Popup>
            </Marker>
        </MapContainer>
    )
}
