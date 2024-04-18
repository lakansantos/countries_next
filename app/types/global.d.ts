type ParsedUrlQueryInput = import('querystring').ParsedUrlQueryInput;
declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_API_URL: string;
  }
}

type Country = {
  name: {
    common: string;
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
