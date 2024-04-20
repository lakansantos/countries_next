type ParsedUrlQueryInput = import('querystring').ParsedUrlQueryInput;
type LatLngTuple = import('leaflet').LatLngTuple;
declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_API_URL: string;
  }
}

type Country = {
  coatOfArms: {
    png: string;
    svg: string;
  };
  name: {
    common: string;
    nativeName: Record<string>;
  };
  latlng: LatLngTuple;
  capitalInfo: {
    latlng: number[];
  };
  flags: {
    svg: string;
    png: string;
    alt: string;
  };
  region: string;
  capital: string[];
  population: number;
  cca2: string;
  languages: [];
  timezones: string[];
};

type Countries = Country[];
