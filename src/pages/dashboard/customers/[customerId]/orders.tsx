import { useCallback, useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Box, Card, Skeleton } from '@mui/material';
import { customersApi } from '../../../../api/customers';
import { ResourceError } from '../../../../components/resource-error';
import { ResourceUnavailable } from '../../../../components/resource-unavailable';
import { useMounted } from '../../../../hooks/use-mounted';
import { usePageView } from '../../../../hooks/use-page-view';
import { Layout as CustomerLayout } from '../../../../layouts/customer';
import { Layout as DashboardLayout } from '../../../../layouts/dashboard';
import { CustomerOrdersTable } from '../../../../sections/dashboard/customers/customer-orders-table';
import type { CustomerOrder } from '../../../../types/customer';

interface OrdersSearchState {
  sortBy: string;
  sortDir: 'asc' | 'desc';
}

const useOrdersSearch = () => {
  const [state, setState] = useState<OrdersSearchState>({
    sortBy: 'createdAt',
    sortDir: 'desc'
  });

  const handleSortChange = useCallback(
    (sortBy: string): void => {
      setState((prevState) => {
        const sortDir = (prevState.sortBy === sortBy && prevState.sortDir === 'asc')
          ? 'desc'
          : 'asc';

        return {
          ...prevState,
          sortBy,
          sortDir
        };
      });
    },
    []
  );

  return {
    handleSortChange,
    state
  };
};

interface OrdersStoreState {
  data?: CustomerOrder[];
  error?: string;
  isLoading?: boolean;
}

interface OrdersStore {
  state: OrdersStoreState;
}

const useOrdersStore = (searchState: OrdersSearchState): OrdersStore => {
  const isMounted = useMounted();
  const [state, setState] = useState<OrdersStoreState>({ isLoading: true });

  const handleOrdersGet = useCallback(
    async (searchState: OrdersSearchState) => {
      setState({ isLoading: true });

      try {
        const response = await customersApi.getCustomerOrders({
          sortBy: searchState.sortBy,
          sortDir: searchState.sortDir
        });

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
      handleOrdersGet(searchState);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [searchState]
  );

  return {
    state
  };
};

type ResourcesState = 'loading' | 'error' | 'unavailable' | 'available';

const getResourcesState = (storeState: OrdersStoreState): ResourcesState => {
  if (storeState.isLoading) {
    return 'loading';
  }

  if (storeState.error) {
    return 'error';
  }

  return storeState.data?.length! > 0 ? 'available' : 'unavailable';
};

const Page: NextPage = () => {
  const ordersSearch = useOrdersSearch();
  const ordersStore = useOrdersStore(ordersSearch.state);

  usePageView();

  const resourcesState = getResourcesState(ordersStore.state);

  return (
    <>
      <Head>
        <title>
          Customer: Orders | Carpatin
        </title>
      </Head>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%'
        }}
      >
        <Card
          sx={{
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1
          }}
        >
          {resourcesState === 'loading' && (
            <Box sx={{ m: 2 }}>
              <Skeleton height={42} />
              <Skeleton height={42} />
              <Skeleton height={42} />
            </Box>
          )}
          {resourcesState === 'error' && (
            <ResourceError
              message="Something went wrong"
              sx={{ m: 2 }}
            />
          )}
          {resourcesState === 'unavailable' && (
            <ResourceUnavailable
              message="Resources are not available"
              sx={{ m: 2 }}
            />
          )}
          {resourcesState === 'available' && (
            <CustomerOrdersTable
              items={ordersStore.state.data}
              onSortChange={ordersSearch.handleSortChange}
            />
          )}
        </Card>
      </Box>
    </>
  );
};

Page.getLayout = (page) => (
  <DashboardLayout>
    <CustomerLayout>
      {page}
    </CustomerLayout>
  </DashboardLayout>
);

export default Page;
