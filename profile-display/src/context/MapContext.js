// src/context/MapContext.js
import React, { createContext, useContext, useState } from 'react';

// Create a context for the map
const MapContext = createContext();

// Custom hook to use the MapContext
export const useMapContext = () => useContext(MapContext);

// Provider component
export const MapProvider = ({ children }) => {
  const [selectedProfile, setSelectedProfile] = useState(null);

  return (
    <MapContext.Provider value={{ selectedProfile, setSelectedProfile }}>
      {children}
    </MapContext.Provider>
  );
};
