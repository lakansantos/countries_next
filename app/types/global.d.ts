type ParsedUrlQueryInput = import('querystring').ParsedUrlQueryInput;
declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_API_URL: string;
  }
}

type Countries = {
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
}[];
