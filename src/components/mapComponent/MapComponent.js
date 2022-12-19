import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import './mapComponent.scss';

function MapComponent() {
	const position = [48.504201, 34.998751];
	const zoom = 15;

	return (
		<MapContainer zoom={zoom} center={position} scrollWheelZoom={false}>
			<TileLayer attribution="&amp;" url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
			<Marker position={position}>
				<Popup>Rich Stone</Popup>
			</Marker>
		</MapContainer>
	);
}

export default MapComponent;
