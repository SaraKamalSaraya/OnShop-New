import type { ChangeEvent, FC, ReactNode } from 'react';
import { useCallback, useEffect, useState } from 'react';
import NextLink from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import ArrowLeftIcon from '@heroicons/react/24/outline/ArrowLeftIcon';
import CalendarIcon from '@heroicons/react/24/outline/CalendarIcon';
import CurrencyDollarIcon from '@heroicons/react/24/outline/CurrencyDollarIcon';
import ShoppingCartIcon from '@heroicons/react/24/outline/ShoppingCartIcon';
import {
  Box,
  Button,
  Container,
  Divider,
  Skeleton,
  Stack,
  SvgIcon,
  Tab,
  Tabs,
  Typography
} from '@mui/material';
import { customersApi } from '../../api/customers';
import { ActionsMenu } from '../../components/actions-menu';
import { ConfirmationDialog } from '../../components/confirmation-dialog';
import { ResourceError } from '../../components/resource-error';
import { ResourceUnavailable } from '../../components/resource-unavailable';
import { useDialog } from '../../hooks/use-dialog';
import { useMounted } from '../../hooks/use-mounted';
import { paths } from '../../paths';
import type { Customer } from '../../types/customer';

interface TabOption {
  label: string;
  path: string;
}

const tabOptions: TabOption[] = [
  {
    label: 'Summary',
    path: paths.dashboard.customers.details.index
  },
  {
    label: 'Orders',
    path: paths.dashboard.customers.details.orders
  },
  {
    label: 'Activity',
    path: paths.dashboard.customers.details.activity
  }
];

interface CustomerStoreState {
  data?: Customer;
  error?: string;
  isLoading?: boolean;
}

interface CustomerStore {
  state: CustomerStoreState;
}

const useCustomerStore = (): CustomerStore => {
  const isMounted = useMounted();
  const [state, setState] = useState<CustomerStoreState>({ isLoading: true });

  const handleCustomerGet = useCallback(
    async () => {
      setState({ isLoading: true });

      try {
        const response = await customersApi.getCustomer();

        if (isMounted()) {
          setState({ data: response });
        }
      } catch (err) {
        console.error(err);

        if (isMounted()) {
          setState({ error: 'Something went wrong' });
        }
      }
    },
    [isMounted]
  );

  useEffect(
    () => {
      handleCustomerGet();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return {
    state
  };
};

type ResourcesState = 'loading' | 'error' | 'unavailable' | 'available';

const getResourcesState = (storeState: CustomerStoreState): ResourcesState => {
  if (storeState.isLoading) {
    return 'loading';
  }

  if (storeState.error) {
    return 'error';
  }

  return storeState.data ? 'available' : 'unavailable';
};

interface LayoutProps {
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = (props) => {
  const { children } = props;
  const router = useRouter();
  const pathname = usePathname();
  const customerStore = useCustomerStore();
  const banDialog = useDialog();

  const handleVerificationSend = useCallback(
    (): void => {
      toast.error('This action is not available on demo');
    },
    []
  );

  const handlePasswordResetSend = useCallback(
    (): void => {
      toast.error('This action is not available on demo');
    },
    []
  );

  const handleAccountBan = useCallback(
    (): void => {
      banDialog.handleClose();
      toast.error('This action is not available on demo');
    },
    [banDialog]
  );

  const handleTabsChange = useCallback(
    (event: ChangeEvent<{}>, value: string): void => {
      router.push(value);
    },
    [router]
  );

  const currentTab = tabOptions.find((option) => option.path === pathname);

  const resourcesState = getResourcesState(customerStore.state);

  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          py: 4
        }}
      >
        <Container
          maxWidth="xl"
          sx={{ height: '100%' }}
        >
          {resourcesState === 'loading' && (
            <div>
              <Skeleton height={42} />
              <Skeleton />
              <Skeleton />
            </div>
          )}
          {resourcesState === 'error' && (
            <ResourceError message="Something went wrong" />
          )}
          {resourcesState === 'unavailable' && (
            <ResourceUnavailable message="Resources are not available" />
          )}
          {resourcesState === 'available' && (
            <Stack
              spacing={4}
              sx={{ height: '100%' }}
            >
              <Stack spacing={2}>
                <div>
                  <Button
                    color="inherit"
                    component={NextLink}
                    href={paths.dashboard.customers.index}
                    startIcon={(
                      <SvgIcon fontSize="small">
                        <ArrowLeftIcon />
                      </SvgIcon>
                    )}
                  >
                    Customers
                  </Button>
                </div>
                <Stack
                  alignItems="flex-start"
                  direction="row"
                  justifyContent="space-between"
                  spacing={1}
                >
                  <Stack spacing={1}>
                    <Typography variant="h4">
                      Customer
                    </Typography>
                    <Stack
                      alignItems="center"
                      flexWrap="wrap"
                      direction="row"
                      spacing={2}
                    >
                      <Stack
                        alignItems="center"
                        direction="row"
                        spacing={1}
                      >
                        <SvgIcon fontSize="small">
                          <CalendarIcon />
                        </SvgIcon>
                        <Typography
                          color="text.secondary"
                          variant="body2"
                        >
                          Since: Feb 2023
                        </Typography>
                      </Stack>
                      <Stack
                        alignItems="center"
                        direction="row"
                        spacing={1}
                      >
                        <SvgIcon fontSize="small">
                          <ShoppingCartIcon />
                        </SvgIcon>
                        <Typography
                          color="text.secondary"
                          variant="body2"
                        >
                          Orders: 17
                        </Typography>
                      </Stack>
                      <Stack
                        alignItems="center"
                        direction="row"
                        spacing={1}
                      >
                        <SvgIcon fontSize="small">
                          <CurrencyDollarIcon />
                        </SvgIcon>
                        <Typography
                          color="text.secondary"
                          variant="body2"
                        >
                          Spent: $159.00
                        </Typography>
                      </Stack>
                    </Stack>
                  </Stack>
                  <ActionsMenu
                    actions={[
                      {
                        label: 'Send Verification Email',
                        handler: handleVerificationSend
                      },
                      {
                        label: 'Send Password Reset Email',
                        handler: handlePasswordResetSend
                      },
                      {
                        label: 'Ban Customer',
                        handler: banDialog.handleOpen
                      }
                    ]}
                  />
                </Stack>
                <div>
                  <Tabs
                    onChange={handleTabsChange}
                    value={currentTab?.path}
                    variant="scrollable"
                  >
                    {tabOptions.map((option) => (
                      <Tab
                        key={option.path}
                        label={option.label}
                        value={option.path}
                      />
                    ))}
                  </Tabs>
                  <Divider />
                </div>
              </Stack>
              {children}
            </Stack>
          )}
        </Container>
      </Box>
      <ConfirmationDialog
        message="Are you sure you want to ban this account? This can't be undone."
        onCancel={banDialog.handleClose}
        onConfirm={handleAccountBan}
        open={banDialog.open}
        title="Ban Customer"
        variant="error"
      />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node
};
