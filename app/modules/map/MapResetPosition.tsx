import {Button} from '@mui/material';
import React, {useCallback, useEffect, useState} from 'react';

const zoom = 5;
const MapResetPosition = ({map, center}: {map: L.Map; center: LatLngTuple}) => {
  const [position, setPosition] = useState(() => map.getCenter());

  const onClick = useCallback(() => {
    map.setView(center, zoom);
  }, [map, center]);

  const onMove = useCallback(() => {
    setPosition(map.getCenter());
  }, [map]);

  useEffect(() => {
    map.on('move', onMove);
    return () => {
      map.off('move', onMove);
    };
  }, [map, onMove]);

  return (
    <p>
      latitude: {position.lat.toFixed(4)}, longitude: {position.lng.toFixed(4)}{' '}
      <Button onClick={onClick} variant="contained">
        reset
      </Button>
    </p>
  );
};

export default MapResetPosition;
