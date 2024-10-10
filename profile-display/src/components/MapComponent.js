// src/components/Map.js
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = ({ selectedProfile }) => {
  const mapContainerStyle = {
    width: '100%',
    height: '400px',
  };

  // Default center coordinates
  const defaultCenter = { lat: 37.7749, lng: -122.4194 }; // San Francisco
  const center = selectedProfile
    ? { lat: selectedProfile.lat, lng: selectedProfile.lng }
    : defaultCenter;

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={selectedProfile ? 10 : 2}
      >
        {selectedProfile && (
          <Marker
            position={{ lat: selectedProfile.lat, lng: selectedProfile.lng }}
            label={selectedProfile.name}
          />
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;