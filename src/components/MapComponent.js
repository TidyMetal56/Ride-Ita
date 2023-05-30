import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker, DirectionsRenderer } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
    lat: 21.876828359577342,
    lng: -102.26117693478515
  };

const DESTINATION_LAT = 21.876828359577342;
const DESTINATION_LNG = -102.26117693478515;

const MapComponent = () => {
    const [userLocation, setUserLocation] = useState(null);
    const [directions, setDirections] = useState(null);
    const [directionsOptions, setDirectionsOptions] = useState(null);

    useEffect(() => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            setUserLocation({ lat: latitude, lng: longitude });
          });
        }
      }, []);

    const getDirections = () => {
        const directionsService = new window.google.maps.DirectionsService();
    
        const origin = userLocation;
        const destination = { lat: DESTINATION_LAT, lng: DESTINATION_LNG };
    
        directionsService.route(
          {
            origin,
            destination,
            travelMode: 'DRIVING'
          },
          (result, status) => {
            if (status === 'OK') {
              setDirections(result);
            } else {
              console.error('Error al obtener las direcciones:', status);
            }
          }
        );
      };

  return (
    <LoadScript googleMapsApiKey="AIzaSyBhr6S8phAzjFJUS_E7ukB8p1pAB92p5ao">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {userLocation && <Marker position={userLocation} />}
        {directions && <DirectionsRenderer directions={directions} options={directionsOptions} />}
      </GoogleMap>
      <button onClick={getDirections}>Obtener direcciones</button>
    </LoadScript>
  );
};

export default MapComponent;
