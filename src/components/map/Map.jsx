import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const position = [51.505, -0.09];

const Map = () => {
  return (
    <div className="flex flex-row   ">
      <div>
        <MapContainer
          center={position}
          zoom={13}
          scrollWheelZoom={false}
          className="leaflet-container"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker> */}
        </MapContainer>
      </div>
    </div>
  );
};

export default Map;
