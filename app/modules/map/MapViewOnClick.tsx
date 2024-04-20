import {useMapEvent} from 'react-leaflet';

function MapViewOnClick() {
  const map = useMapEvent('click', (e) => {
    map.setView(e.latlng, map.getZoom(), {
      animate: true,
      duration: 1,
    });
  });

  return null;
}

export default MapViewOnClick;
