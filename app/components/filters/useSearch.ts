import {useState} from 'react';

const useSearch = () => {
  // null because we have two data,
  // we need this to be null if there is no data
  // so that the original data will be displayed.
  const [searchedData, setSearchedData] = useState<Countries | null>(null);

  return {
    searchedData,
    setSearchedData,
  };
};

export default useSearch;
