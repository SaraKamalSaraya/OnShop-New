import type { FC, ReactNode } from 'react';
import NextLink from 'next/link';
import PropTypes from 'prop-types';
import { Box, Container, Divider, Stack, Tooltip, Typography } from '@mui/material';
import { Logo } from '../../components/logo';
import { useAuth } from '../../hooks/use-auth';
import { paths } from '../../paths';
import { Issuer } from '../../utils/auth';

const TOP_NAV_HEIGHT: number = 64;

const issuers: Record<Issuer, string> = {
  Amplify: '/assets/logos/logo-amplify.svg',
  Auth0: '/assets/logos/logo-auth0.svg',
  Firebase: '/assets/logos/logo-firebase.svg',
  JWT: '/assets/logos/logo-jwt.svg'
};

interface LayoutProps {
  children?: ReactNode;
}

export const Layout: FC<LayoutProps> = (props) => {
  const { children } = props;
  const { issuer: currentIssuer } = useAuth();

  return (
    <>
      <Box
        component="header"
        sx={{
          backgroundColor: 'background.paper',
          position: 'sticky'
        }}
      >
        <Container
          maxWidth="md"
          sx={{ height: TOP_NAV_HEIGHT }}
        >
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex',
              height: '100%'
            }}
          >
            <Box
              component={NextLink}
              href={paths.index}
              sx={{
                display: 'inline-flex',
                height: 24,
                width: 24
              }}
            >
              <Logo />
            </Box>
          </Box>
        </Container>
      </Box>
      <Box
        component="main"
        sx={{
          backgroundColor: 'background.paper',
          flexGrow: 1,
          py: '64px'
        }}
      >
        <Container maxWidth="sm">
          {children}
          <Divider
            sx={{
              mb: 3,
              mt: 6
            }}
          />
          <Stack
            alignItems="center"
            spacing={2}
          >
            <Typography
              align="center"
              variant="h5"
            >
              Auth Services
            </Typography>
            <Typography
              align="center"
              color="text.secondary"
              variant="body2"
            >
              The template comes with Amplify, Firebase, Auth0, JWT auth systems
              installed and configured. Get up and running in minutes.
            </Typography>
            <Stack
              alignItems="center"
              direction="row"
              spacing={4}
            >
              {Object.keys(issuers).map((issuer) => {
                const isCurrent = issuer === currentIssuer;
                const icon = issuers[issuer as Issuer];

                return (
                  <Tooltip
                    key={issuer}
                    title={issuer}
                  >
                    <Box
                      component="img"
                      src={icon}
                      sx={{
                        height: 30,
                        '&:not(:hover)': {
                          ...(!isCurrent && {
                            filter: 'grayscale(100%)'
                          })
                        }
                      }}
                    />
                  </Tooltip>
                );
              })}
            </Stack>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node
};
