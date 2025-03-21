"use client";

import React from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import Content from "./Content";
import Location from "./location/Location";

const mapContainerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 24.5, // Slightly south of Riyadh
  lng: 45.5,
}; // Center around Riyadh

const locations = [
  { lat: 24.7136, lng: 46.6753 }, // Riyadh
  { lat: 26.2172, lng: 50.1971 }, // Dammam
];

const Locations = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyACyl0V6q-y690EdIhyuq6fdbvGHoFtGGE", // Replace with your API key
  });

  if (loadError) return <p>Error loading maps</p>;
  if (!isLoaded) return <p>Loading Maps...</p>;

  return (
    <section>
      <Content />
      <div className="mt-[-82px] lg:mt-0 lg:py-sp120 pb-[150px] myContainer relative flex flex-wrap justify-end gap-12">
        <div className="z-[3] relative lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:lrf1 lg:w-[46.7361111111vw] lg:h-[57.1527777778vw] w-full h-[428px] lg:border12 border10 overflow-hidden">
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={6}
            center={center}
          >
            {locations.map((loc, index) => (
              <Marker
                key={index}
                position={loc}
                icon={{
                  url: "/images/icons/marker.svg", // Replace with the uploaded marker
                  scaledSize: new window.google.maps.Size(60, 60), // Adjust size
                }}
              />
            ))}
          </GoogleMap>
        </div>
        <Location />
      </div>
    </section>
  );
};

export default Locations;
