import React, {ReactNode} from 'react';
import {Box} from '@mui/material';

type ContainerProps = {
  children: ReactNode;
};
const PagesContainer: React.FC<ContainerProps> = ({children}) => {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplate: `
          'navbar navbar navbar' 70px
          'content content content' 1fr`,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
      }}
    >
      {children}
    </Box>
  );
};

export default PagesContainer;
