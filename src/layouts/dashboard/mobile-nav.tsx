import type { FC } from 'react';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import PropTypes from 'prop-types';
import { Box, Drawer, Stack } from '@mui/material';
import { Logo } from '../../components/logo';
import { Scrollbar } from '../../components/scrollbar';
import { paths } from '../../paths';
import type { Item } from './config';
import { items } from './config';
import { MobileNavItem } from './mobile-nav-item';

const MOBILE_NAV_WIDTH: number = 280;

const renderItems = ({
  depth = 0,
  items,
  pathname
}: {
  depth?: number;
  items: Item[];
  pathname?: string | null;
}): JSX.Element[] => items.reduce(
  (acc: JSX.Element[], item) => reduceChildRoutes({
    acc,
    depth,
    item,
    pathname
  }),
  []
);

const reduceChildRoutes = ({
  acc,
  depth,
  item,
  pathname
}: {
  acc: JSX.Element[];
  depth: number;
  item: Item;
  pathname?: string | null;
}): Array<JSX.Element> => {
  const checkPath = !!(item.path && pathname);
  const partialMatch = checkPath ? pathname.includes(item.path!) : false;
  const exactMatch = checkPath ? pathname === item.path : false;

  if (item.items) {
    acc.push(
      <MobileNavItem
        active={partialMatch}
        depth={depth}
        external={item.external}
        icon={item.icon}
        key={item.title}
        openImmediately={partialMatch}
        path={item.path}
        title={item.title}
      >
        <Stack
          component="ul"
          spacing={0.5}
          sx={{
            listStyle: 'none',
            m: 0,
            p: 0
          }}
        >
          {renderItems({
            depth: depth + 1,
            items: item.items,
            pathname
          })}
        </Stack>
      </MobileNavItem>
    );
  } else {
    acc.push(
      <MobileNavItem
        active={exactMatch}
        depth={depth}
        external={item.external}
        icon={item.icon}
        key={item.title}
        path={item.path}
        title={item.title}
      />
    );
  }

  return acc;
};

interface MobileNavProps {
  onClose?: () => void;
  open?: boolean;
}

export const MobileNav: FC<MobileNavProps> = (props) => {
  const { open, onClose } = props;
  const pathname = usePathname();

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          width: MOBILE_NAV_WIDTH
        }
      }}
      variant="temporary"
    >
      <Scrollbar
        sx={{
          height: '100%',
          '& .simplebar-content': {
            height: '100%'
          }
        }}
      >
        <Box
          sx={{
            pt: 2,
            px: 2
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
        <Box
          component="nav"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            p: 2
          }}
        >
          <Box
            component="ul"
            sx={{
              flexGrow: 1,
              listStyle: 'none',
              m: 0,
              p: 0
            }}
          >
            {renderItems({
              depth: 0,
              items,
              pathname
            })}
          </Box>
        </Box>
      </Scrollbar>
    </Drawer>
  );
};

MobileNav.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool
};
