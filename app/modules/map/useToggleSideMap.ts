import {useState} from 'react';
const useToggleSideMap = () => {
  const [openTab, setOpenTab] = useState(true);

  const toggleOpenTab = () => setOpenTab(!openTab);

  return {
    setOpenTab,
    openTab,
    toggleOpenTab,
  };
};

export default useToggleSideMap;
