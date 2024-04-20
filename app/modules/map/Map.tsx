'use client';
import React, {useState} from 'react';
import {Marker, ZoomControl} from 'react-leaflet';

import L from 'leaflet';
import {MapContainer} from 'react-leaflet/MapContainer';
import {TileLayer} from 'react-leaflet/TileLayer';

import './styles.css';
import 'leaflet/dist/leaflet.css';

import MapViewOnClick from './MapViewOnClick';
import MapResetPosition from './MapResetPosition';
import MapDetails from './MapDetails';

const Map = ({data}: {data: Country}) => {
  const [map, setMap] = useState<L.Map | null>(null);

  L.Icon.Default.imagePath = '/';

  const {latlng} = data;

  return (
    <div id="map">
      <MapContainer
        center={latlng}
        minZoom={4}
        zoom={5}
        zoomControl={false}
        ref={setMap}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={latlng}></Marker>
        <MapViewOnClick />
        <ZoomControl position="bottomright" />
      </MapContainer>

      {map ? <MapResetPosition map={map} center={latlng} /> : null}
      <MapDetails data={data} />
    </div>
  );
};

export default Map;
