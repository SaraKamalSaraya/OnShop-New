import type { FC } from 'react';
import { useCallback, useState } from 'react';
import NextLink from 'next/link';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import toast from 'react-hot-toast';
import Bars3Icon from '@heroicons/react/24/outline/Bars3Icon';
import MoonIcon from '@heroicons/react/24/outline/MoonIcon';
import SunIcon from '@heroicons/react/24/outline/SunIcon';
import type { Theme } from '@mui/material';
import { Box, Divider, IconButton, Stack, SvgIcon, useMediaQuery } from '@mui/material';
import { Logo } from '../../components/logo';
import { useSettings } from '../../hooks/use-settings';
import { paths } from '../../paths';
import { AccountPopover } from './account-popover';
import { LanguagePopover } from './language-popover';
import { NotificationsPopover } from './notifications-popover';
import { OrganizationPopover } from './organization-popover';

const TOP_NAV_HEIGHT: number = 64;

type Language = 'de' | 'en' | 'es';

interface Organization {
  id: string;
  name: string;
}

const organizations: Organization[] = [
  {
    id: '60cffc5da77cd8d2b12246e9',
    name: 'Devias IO'
  },
  {
    id: '22ac644657adeaa97c33562b',
    name: 'Acme'
  }
];

interface TopNavProps {
  onNavOpen?: () => void;
  openNav?: boolean;
}

export const TopNav: FC<TopNavProps> = (props) => {
  const { onNavOpen } = props;
  const { i18n, t } = useTranslation();
  const settings = useSettings();
  const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
  const [organizationId, setOrganizationId] = useState<string>(organizations[0].id);

  const handleLanguageChange = useCallback(
    (value: Language): void => {
      i18n.changeLanguage(value);
      toast.success(t('Language changed'));
    },
    [i18n, t]
  );

  const handleThemeSwitch = useCallback(
    (): void => {
      settings.handleUpdate({
        paletteMode: settings.paletteMode === 'light' ? 'dark' : 'light'
      });
    },
    [settings]
  );

  const handleDirectionSwitch = useCallback(
    (): void => {
      settings.handleUpdate({
        direction: settings.direction === 'ltr' ? 'rtl' : 'ltr'
      });
    },
    [settings]
  );

  const handleOrganizationSwitch = useCallback(
    (organizationId: string): void => {
      setOrganizationId(organizationId);
    },
    []
  );

  return (
    <Box
      component="header"
      sx={{
        backgroundColor: 'neutral.900',
        color: 'common.white',
        position: 'fixed',
        width: '100%',
        zIndex: (theme) => theme.zIndex.appBar
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{
          minHeight: TOP_NAV_HEIGHT,
          px: 3
        }}
      >
        <Stack
          alignItems="center"
          direction="row"
          spacing={3}
          divider={(
            <Divider
              orientation="vertical"
              sx={{
                borderColor: 'neutral.500',
                height: 36
              }}
            />
          )}
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
          {!mdDown && (
            <OrganizationPopover
              onOrganizationSwitch={handleOrganizationSwitch}
              organizationId={organizationId}
              organizations={organizations}
            />
          )}
          {mdDown && (
            <IconButton
              color="inherit"
              onClick={onNavOpen}
            >
              <SvgIcon
                color="action"
                fontSize="small"
              >
                <Bars3Icon />
              </SvgIcon>
            </IconButton>
          )}
        </Stack>
        <Stack
          alignItems="center"
          direction="row"
          spacing={2}
        >
          {!mdDown && (
            <LanguagePopover
              language={i18n.language as Language}
              onLanguageChange={handleLanguageChange}
            />
          )}
          {!mdDown && (
            <IconButton
              color="inherit"
              onClick={handleThemeSwitch}
            >
              <SvgIcon
                color="action"
                fontSize="small"
              >
                {settings.paletteMode === 'dark' ? <SunIcon /> : <MoonIcon />}
              </SvgIcon>
            </IconButton>
          )}
          <NotificationsPopover />
          <AccountPopover
            direction={settings.direction}
            language={i18n.language as Language}
            onDirectionSwitch={handleDirectionSwitch}
            onLanguageChange={handleLanguageChange}
            onOrganizationChange={handleOrganizationSwitch}
            onThemeSwitch={handleThemeSwitch}
            organizationId={organizationId}
            organizations={organizations}
            paletteMode={settings.paletteMode}
          />
        </Stack>
      </Stack>
    </Box>
  );
};

TopNav.propTypes = {
  onNavOpen: PropTypes.func,
  openNav: PropTypes.bool
};
