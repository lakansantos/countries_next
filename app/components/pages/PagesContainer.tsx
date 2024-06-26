'use client';
import React from 'react';
import {Box, useTheme} from '@mui/material';

type ContainerProps = {
  children: React.ReactNode;
};
const PagesContainer: React.FC<ContainerProps> = (props: ContainerProps) => {
  const {children} = props;

  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'grid',
        background: theme.palette.background.default,
        gridTemplate: `
          'navbar navbar navbar' 70px
          'content content content' 1fr`,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        maxHeight: 'fit-content',
        color: theme.palette.primary.main,
      }}
    >
      {children}
    </Box>
  );
};

export default PagesContainer;
