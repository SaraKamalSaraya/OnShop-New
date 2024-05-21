import { useCallback, useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Stack, Unstable_Grid2 as Grid } from '@mui/material';
import { customersApi } from '../../../../api/customers';
import { ResourceError } from '../../../../components/resource-error';
import { ResourceLoading } from '../../../../components/resource-loading';
import { ResourceUnavailable } from '../../../../components/resource-unavailable';
import { useDialog } from '../../../../hooks/use-dialog';
import { useMounted } from '../../../../hooks/use-mounted';
import { usePageView } from '../../../../hooks/use-page-view';
import { Layout as CustomerLayout } from '../../../../layouts/customer';
import { Layout as DashboardLayout } from '../../../../layouts/dashboard';
import { CustomerDialog } from '../../../../sections/dashboard/customers/customer-dialog';
import { CustomerDetails } from '../../../../sections/dashboard/customers/customer-details';
import { CustomerLatestOrders } from '../../../../sections/dashboard/customers/customer-latest-orders';
import { CustomerNotes } from '../../../../sections/dashboard/customers/customer-notes';
import { CustomerProperties } from '../../../../sections/dashboard/customers/customer-properties';
import type { Customer, CustomerNote, CustomerOrder } from '../../../../types/customer';
import { createResourceId } from '../../../../utils/create-resource-id';

// NOTE: To prevent sync errors between CustomerLayout and this customer page,
//  you may want to store the customer into a context and propagate it down from CustomerLayout.

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

interface OrdersStoreState {
  data?: CustomerOrder[];
  error?: string;
  isLoading?: boolean;
}

interface OrdersStore {
  state: OrdersStoreState;
}

const useOrdersStore = (): OrdersStore => {
  const isMounted = useMounted();
  const [state, setState] = useState<OrdersStoreState>({ isLoading: true });

  const handleOrdersGet = useCallback(
    async () => {
      setState({ isLoading: true });

      try {
        const response = await customersApi.getCustomerOrders();

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
      handleOrdersGet();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return {
    state
  };
};

interface NotesStoreState {
  data?: CustomerNote[];
  error?: string;
  isLoading?: boolean;
}

interface NotesStore {
  handleNoteCreate: (content: string) => void;
  handleNoteDelete: (noteId: string) => void;
  state: NotesStoreState;
}

const useNotesStore = (): NotesStore => {
  const isMounted = useMounted();
  const [state, setState] = useState<NotesStoreState>({ isLoading: true });

  const handleNotesGet = useCallback(
    async () => {
      setState({ isLoading: true });

      try {
        const response = await customersApi.getCustomerNotes();

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

  const handleNoteCreate = useCallback(
    (content: string): void => {
      // Do API call and create the note

      const note: CustomerNote = {
        id: createResourceId(),
        authorId: '5e86809283e28b96d2d38537',
        authorAvatar: '/assets/avatars/avatar-chen-simmons.jpg',
        authorName: 'Chen Simmons',
        content,
        createdAt: new Date().getTime()
      };

      setState((prevState) => {
        if (!prevState.data) {
          return prevState;
        }

        return {
          ...prevState,
          data: [
            note,
            ...prevState.data
          ]
        };
      });
    },
    []
  );

  const handleNoteDelete = useCallback(
    (noteId: string): void => {
      // Do API call

      setState((prevState) => {
        return {
          ...prevState,
          data: (prevState.data || []).filter((note) => note.id !== noteId)
        };
      });
    },
    []
  );

  useEffect(
    () => {
      handleNotesGet();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return {
    handleNoteCreate,
    handleNoteDelete,
    state
  };
};

type ResourcesState = 'loading' | 'error' | 'unavailable' | 'available';

const getResourcesState = (
  customerStoreState: CustomerStoreState,
  ordersStoreState: OrdersStoreState,
  notesStoreState: NotesStoreState
): ResourcesState => {
  if (
    customerStoreState.isLoading ||
    notesStoreState.isLoading ||
    ordersStoreState.isLoading
  ) {
    return 'loading';
  }

  if (
    customerStoreState.error ||
    notesStoreState.error ||
    ordersStoreState.error
  ) {
    return 'error';
  }

  if (
    customerStoreState.data &&
    notesStoreState.data &&
    ordersStoreState.data
  ) {
    return 'available';
  }

  return 'unavailable';
};

const Page: NextPage = () => {
  const customerStore = useCustomerStore();
  const ordersStore = useOrdersStore();
  const notesStore = useNotesStore();
  const detailsDialog = useDialog();

  usePageView();

  const resourcesState = getResourcesState(
    customerStore.state,
    ordersStore.state,
    notesStore.state
  );

  return (
    <>
      <Head>
        <title>
          Customer: Summary | Carpatin
        </title>
      </Head>
      {resourcesState === 'loading' && (
        <ResourceLoading message="Loading resources" />
      )}
      {resourcesState === 'error' && (
        <ResourceError message="Something went wrong" />
      )}
      {resourcesState === 'unavailable' && (
        <ResourceUnavailable message="Resources are not available" />
      )}
      {resourcesState === 'available' && (
        <div>
          <Grid
            container
            spacing={3}
          >
            <Grid
              xs={12}
              lg={4}
            >
              <Stack spacing={3}>
                <CustomerDetails
                  customer={customerStore.state.data!}
                  onEdit={detailsDialog.handleOpen}
                />
                <CustomerProperties customer={customerStore.state.data!} />
              </Stack>
            </Grid>
            <Grid
              xs={12}
              lg={8}
            >
              <Stack spacing={3}>
                <CustomerLatestOrders orders={ordersStore.state.data} />
                <CustomerNotes
                  notes={notesStore.state.data}
                  onNoteCreate={notesStore.handleNoteCreate}
                  onNoteDelete={notesStore.handleNoteDelete}
                />
              </Stack>
            </Grid>
          </Grid>
        </div>
      )}
      <CustomerDialog
        action="update"
        customer={customerStore.state.data}
        onClose={detailsDialog.handleClose}
        open={detailsDialog.open}
      />
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
