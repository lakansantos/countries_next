'use client';

import React, {useState} from 'react';
import {Marker} from 'react-leaflet';
import {LatLngTuple} from 'leaflet';
import L from 'leaflet';
import {MapContainer} from 'react-leaflet/MapContainer';
import {TileLayer} from 'react-leaflet/TileLayer';

import './styles.css';
import 'leaflet/dist/leaflet.css';

import MapViewOnClick from './MapViewOnClick';
import MapResetPosition from './MapResetPosition';

const Map = ({latlng}: {latlng: LatLngTuple}) => {
  const [map, setMap] = useState<L.Map | null>(null);

  L.Icon.Default.imagePath = '/';
  return (
    <div id="map">
      {map ? <MapResetPosition map={map} center={latlng} /> : null}
      <MapContainer
        center={latlng}
        zoom={5}
        scrollWheelZoom={true}
        ref={setMap}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={latlng}></Marker>
        <MapViewOnClick />
      </MapContainer>
    </div>
  );
};

export default Map;
