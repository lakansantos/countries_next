import {COUNTRIES_API_URL} from 'app/configs/constants';

const useGetCountry = async (id: string) => {
  const joinedURL = `${COUNTRIES_API_URL}/alpha/${id}`;

  const response = await fetch(joinedURL);
  const data: Countries = response.ok ? await response.json() : [];
  return {
    data,
  };
};

export default useGetCountry;
