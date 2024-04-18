import {COUNTRIES_API_URL} from 'app/configs/constants';

const useGetCountries = async () => {
  const extendURL = 'all?fields=name,flags,population,region,capital,cca2';
  const joinedURL = `${COUNTRIES_API_URL}/${extendURL}`;

  const response = await fetch(joinedURL);
  const data: Countries = response.ok ? await response.json() : [];

  return {
    data,
  };
};

export default useGetCountries;
