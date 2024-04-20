import React from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
  ThemeProvider,
  Typography,
  createTheme,
} from '@mui/material';
import {isEmpty} from 'lodash';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import {useThemeToggle} from 'app/hooks/useThemeModeToggle';
import useToggleSideMap from './useToggleSideMap';

const MapDetails = ({data}: {data: Country}) => {
  const {
    flags,
    coatOfArms,
    region,
    languages,
    capital,
    population,
    name,
    timezones,
  } = data;
  const nativeNameKeys = Object.keys(name.nativeName);
  const nativeNameKey =
    nativeNameKeys.length === 1
      ? nativeNameKeys
      : nativeNameKeys.find((key) => key !== 'eng');

  const commonNativeName = name.nativeName[nativeNameKey].common;
  const formattedLanguages = Object.entries(languages)
    .map((lang) => {
      return lang[1];
    })
    .join(', ');

  const {darkMode} = useThemeToggle();

  const customizedButtonTheme = createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            background: darkMode ? 'hsl(209, 23%, 22%)' : '#fff',
            color: darkMode ? '#fff' : '#000',
            border: 0,
            borderRadius: '0 10px 10px 0',
            ':hover': {
              background: darkMode
                ? 'hsl(207, 23%, 19%)'
                : 'rgb(236, 240, 241)',
            },
          },
        },
      },
    },
  });

  const {openTab, toggleOpenTab} = useToggleSideMap();

  return (
    <Box
      sx={{
        position: 'absolute',
        left: 0,
        top: 0,
        height: '100%',
        zIndex: 400,
        width: {xs: '80%', sm: 400},
        transform: openTab ? 'translate(0%)' : 'translate(-100%)',
        transition: 'transform 0.5s ease',
      }}
    >
      <ThemeProvider theme={customizedButtonTheme}>
        <Button
          variant="contained"
          sx={{
            top: '50%',
            right: -32,
            zIndex: -1,
            height: 70,
            width: 5,
            minWidth: 5,
            position: 'absolute',
          }}
          onClick={toggleOpenTab}
        >
          {openTab ? <ArrowLeftIcon /> : <ArrowRightIcon />}
        </Button>
      </ThemeProvider>

      <Card
        sx={{
          height: '100%',
          overflowY: 'auto',
          bgcolor: 'secondary.main',
          borderRadius: 0,
        }}
      >
        <CardMedia component="img" image={flags.png} title={flags.alt} />

        <CardContent
          sx={{
            px: 3,
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Box>
            <Typography variant="h5" component="span">
              {name.common}{' '}
            </Typography>
            {commonNativeName !== name.common && (
              <Typography variant="subtitle1">{commonNativeName}</Typography>
            )}
          </Box>
          {isEmpty(coatOfArms) ? (
            <Box
              sx={{
                width: 100,
                height: 100,
                border: 2,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                borderColor: 'background.default',
              }}
              component="div"
            >
              N/A
            </Box>
          ) : (
            <CardMedia
              component="img"
              image={coatOfArms.svg}
              title=""
              sx={{
                height: 100,
                width: 100,
                objectFit: 'fill',
              }}
            />
          )}
        </CardContent>
        <Divider />
        <CardContent
          sx={{
            px: 3,
          }}
        >
          <Box>
            <Typography component="span" variant="subtitle1" fontWeight="bold">
              Region:{' '}
            </Typography>
            <Typography sx={{display: 'inline'}}>{region}</Typography>
          </Box>
          <Box>
            <Typography component="span" variant="subtitle1" fontWeight="bold">
              Capital:{' '}
            </Typography>
            <Typography sx={{display: 'inline'}}>{capital}</Typography>{' '}
          </Box>
          <Box>
            <Typography component="span" variant="subtitle1" fontWeight="bold">
              Population:{' '}
            </Typography>
            <Typography sx={{display: 'inline'}}>
              {population.toLocaleString()}
            </Typography>
          </Box>
          <Box>
            <Typography component="span" variant="subtitle1" fontWeight="bold">
              Languages:{' '}
            </Typography>
            <Typography sx={{display: 'inline'}}>
              {formattedLanguages}
            </Typography>
          </Box>
          <Box>
            <Typography component="span" variant="subtitle1" fontWeight="bold">
              Timezones:{' '}
            </Typography>
            <Typography sx={{display: 'inline'}}>
              {timezones.join(', ')}
            </Typography>
          </Box>
        </CardContent>
        <Divider />
      </Card>
    </Box>
  );
};

export default MapDetails;
