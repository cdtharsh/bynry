// src/components/MapComponent.js
import React, { useEffect, useRef } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
  borderRadius: '12px',
  overflow: 'hidden',
};

const MapComponent = ({ lat, lng, profile }) => {
  const mapRef = useRef(null); // Reference to the map

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.panTo({ lat, lng }); // Pan the map to the new coordinates
    }
  }, [lat, lng]);

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>{profile.name}'s Location</h2>
      <LoadScript googleMapsApiKey='AIzaSyDs7eXjCeiXj2JGend12EzABWbTVATcsAk'>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={{ lat, lng }} // Center the map on the profile's location
          zoom={15}
          ref={mapRef}
        >
          <Marker position={{ lat, lng }} title={profile.name} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default MapComponent;
