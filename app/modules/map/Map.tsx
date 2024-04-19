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
import {useThemeToggle} from 'app/hooks/useThemeModeToggle';

const Map = ({latlng, token}: {latlng: LatLngTuple; token: string}) => {
  const [map, setMap] = useState<L.Map | null>(null);

  const {darkMode} = useThemeToggle();

  L.Icon.Default.imagePath = '/';

  const tileLayerValues = darkMode
    ? {
        attribution:
          '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        url: `https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png`,
        accessToken: token,
      }
    : {
        attribution: 'Stamen Design',
        url: `https://tiles.stadiamaps.com/tiles/stamen_toner_lite/{z}/{x}/{y}{r}.png`,
        accessToken: token,
      };
  return (
    <div id="map">
      {map ? <MapResetPosition map={map} center={latlng} /> : null}
      <MapContainer
        center={latlng}
        minZoom={4}
        zoom={5}
        scrollWheelZoom={true}
        ref={setMap}
      >
        <TileLayer {...tileLayerValues} />
        <Marker position={latlng}></Marker>
        <MapViewOnClick />
      </MapContainer>
    </div>
  );
};

export default Map;
