import {Box, Button} from '@mui/material';
import React, {useCallback} from 'react';
import MyLocationIcon from '@mui/icons-material/MyLocation';

const zoom = 5;
const MapResetPosition = ({map, center}: {map: L.Map; center: LatLngTuple}) => {
  const onClick = useCallback(() => {
    map.setView(center, zoom, {
      animate: true,
      duration: 1.5,
      easeLinearity: 300,
    });
  }, [map, center]);

  return (
    <Box
      sx={{
        position: 'absolute',
        right: 12,
        bottom: 95,
        zIndex: 400,
      }}
    >
      <Button
        onClick={onClick}
        variant="contained"
        sx={{
          bgcolor: '#fff',
          color: '#000',
          padding: 0,
          minWidth: 30,
          minHeight: 30,
          '&:hover': {
            bgcolor: '#f2f0f0',
          },
        }}
      >
        <MyLocationIcon
          sx={{
            width: 15,
            height: 15,
          }}
        />
      </Button>
    </Box>
  );
};

export default MapResetPosition;
