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
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from '@mui/material';
import {isEmpty} from 'lodash';

const Map = ({data}: {data: Country}) => {
  const [map, setMap] = useState<L.Map | null>(null);

  L.Icon.Default.imagePath = '/';

  const {
    latlng,
    flags,
    coatOfArms,
    region,
    languages,
    capital,
    population,
    name,
    timezones,
  } = data;

  const nativeNameKeys = Object.keys(name.nativeName);
  const nativeNameKey =
    nativeNameKeys.length === 1
      ? nativeNameKeys
      : nativeNameKeys.find((key) => key !== 'eng');

  const commonNativeName = name.nativeName[nativeNameKey].common;
  const formattedLanguages = Object.entries(languages)
    .map((lang) => {
      return lang[1];
    })
    .join(', ');

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
      <Box
        sx={{
          position: 'absolute',
          left: 0,
          top: 0,
          height: '100%',
          zIndex: 400,
          width: {xs: '80%', sm: 400},
        }}
      >
        <Card
          sx={{
            height: '100%',
            bgcolor: 'secondary.main',
            borderRadius: 0,
          }}
        >
          <CardMedia component="img" image={flags.png} title={flags.alt} />

          <CardContent
            sx={{
              px: 3,
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Box>
              <Typography variant="h5" component="span">
                {name.common}{' '}
              </Typography>
              {commonNativeName !== name.common && (
                <Typography variant="subtitle1">{commonNativeName}</Typography>
              )}
            </Box>
            {isEmpty(coatOfArms) ? (
              <Box
                sx={{
                  width: 100,
                  height: 100,
                  border: 2,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                  borderColor: 'background.default',
                }}
                component="div"
              >
                N/A
              </Box>
            ) : (
              <CardMedia
                component="img"
                image={coatOfArms.svg}
                title=""
                sx={{
                  height: 100,
                  width: 100,
                  objectFit: 'fill',
                }}
              />
            )}
          </CardContent>
          <Divider />
          <CardContent
            sx={{
              px: 3,
            }}
          >
            <Box>
              <Typography
                component="span"
                variant="subtitle1"
                fontWeight="bold"
              >
                Region:{' '}
              </Typography>
              <Typography sx={{display: 'inline'}}>{region}</Typography>
            </Box>
            <Box>
              <Typography
                component="span"
                variant="subtitle1"
                fontWeight="bold"
              >
                Capital:{' '}
              </Typography>
              <Typography sx={{display: 'inline'}}>{capital}</Typography>{' '}
            </Box>
            <Box>
              <Typography
                component="span"
                variant="subtitle1"
                fontWeight="bold"
              >
                Population:{' '}
              </Typography>
              <Typography sx={{display: 'inline'}}>
                {population.toLocaleString()}
              </Typography>
            </Box>
            <Box>
              <Typography
                component="span"
                variant="subtitle1"
                fontWeight="bold"
              >
                Languages:{' '}
              </Typography>
              <Typography sx={{display: 'inline'}}>
                {formattedLanguages}
              </Typography>
            </Box>
            <Box>
              <Typography
                component="span"
                variant="subtitle1"
                fontWeight="bold"
              >
                Timezones:{' '}
              </Typography>
              <Typography sx={{display: 'inline'}}>
                {timezones.join(', ')}
              </Typography>
            </Box>
          </CardContent>
          <Divider />
        </Card>
      </Box>
    </div>
  );
};

export default Map;
