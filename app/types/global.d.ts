type ParsedUrlQueryInput = import('querystring').ParsedUrlQueryInput;
type LatLngTuple = import('leaflet').LatLngTuple;
declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_API_URL: string;
    ACCESS_TOKEN: string;
  }
}

type Country = {
  name: {
    common: string;
  };
  latlng: LatLngTuple;
  capitalInfo: {
    latlng: number[];
  };
  flags: {
    svg: string;
    png: string;
  };
  region: string;
  capital: string[];
  population: number;
  cca2: string;
};

type Countries = Country[];
