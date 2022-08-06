import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';

export const MapList = () => {
    const IconMarker = new Icon({
        iconUrl: icon
    });

    return (
        <MapContainer center={[-34.542959910439215, -58.712273073256355]} zoom={14} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[-34.542959910439215, -58.712273073256355]} icon={IconMarker}>
                <Popup>
                Farmaciasd de turno en San Miguel
                </Popup>
            </Marker>
        </MapContainer>
    )
}
