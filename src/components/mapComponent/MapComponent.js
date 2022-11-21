import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './mapComponent.scss';

// указываем путь к файлам marker
L.Icon.Default.imagePath = 'https://unpkg.com/leaflet@1.5.0/dist/images/';

function MapComponent() {
	const position = [48.482857, 35.021346];
	const zoom = 15;

	return (
		<MapContainer zoom={zoom} center={position} scrollWheelZoom={false}>
			<TileLayer
				attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<Marker position={position}>
				<Popup>Rich Stone</Popup>
			</Marker>
		</MapContainer>
	);
}

export default MapComponent;
