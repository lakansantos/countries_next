import {useState} from 'react';

const useSelectRegion = () => {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  return {
    selectedRegion,
    setSelectedRegion,
  };
};

export default useSelectRegion;
