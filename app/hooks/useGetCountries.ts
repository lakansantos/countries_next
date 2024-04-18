import {COUNTRIES_API_URL} from 'app/configs/constants';

const useGetCountries = async () => {
  const response = await fetch(COUNTRIES_API_URL);
  const data: Countries = response.ok ? await response.json() : [];
  return {
    data,
  };
};

export default useGetCountries;
