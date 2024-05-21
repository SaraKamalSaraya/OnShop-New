import type { NextPage } from 'next';
import Head from 'next/head';
import { subDays, subHours, subMinutes } from 'date-fns';
import CreditCardIcon from '@heroicons/react/24/outline/CreditCardIcon';
import CubeIcon from '@heroicons/react/24/outline/CubeIcon';
import ShoppingCartIcon from '@heroicons/react/24/outline/ShoppingCartIcon';
import { Button, Link, SvgIcon, Unstable_Grid2 as Grid } from '@mui/material';
import { usePageView } from '../../hooks/use-page-view';
import { Layout as DashboardLayout } from '../../layouts/dashboard';
import { Layout as ReportsLayout } from '../../layouts/reports';
import { paths } from '../../paths';
import { OverviewAccountSetup } from '../../sections/dashboard/overview/overview-account-setup';
import { OverviewBills } from '../../sections/dashboard/overview/overview-bills';
import { OverviewLatestCustomers } from '../../sections/dashboard/overview/overview-latest-customers';
import { OverviewNotifications } from '../../sections/dashboard/overview/overview-notifications';
import { OverviewOrdersSummary } from '../../sections/dashboard/overview/overview-orders-summary';
import { OverviewSummary } from '../../sections/dashboard/overview/overview-summary';
import ArrowRightIcon from '@heroicons/react/24/outline/ArrowRightIcon';

const now = new Date();

const Page: NextPage = () => {
  usePageView();

  return (
    <>
      <Head>
        <title>
          Reports: Overview | Carpatin
        </title>
      </Head>
      <div>
        <Grid
          container
          spacing={3}
        >
          <Grid
            xs={12}
            md={6}
          >
            <OverviewAccountSetup />
          </Grid>
          <Grid
            xs={12}
            md={6}
          >
            <OverviewNotifications
              notifications={[
                {
                  id: '89492d1f60a395944c34b440',
                  createdAt: subMinutes(now, 10).getTime(),
                  orders: 3,
                  type: 'pendingOrders'
                },
                {
                  id: '8009d8681d47542a685b4db2',
                  createdAt: subMinutes(now, 35).getTime(),
                  notes: 2,
                  subject: 'Natalie Rusell',
                  type: 'teamNotes'
                },
                {
                  id: '4bbf41d778b00626ad8b307f',
                  createdAt: subMinutes(now, 56).getTime(),
                  transactions: 2,
                  type: 'pendingTransactions'
                }
              ]}
            />
          </Grid>
          {[
            {
              action: (
                <Button
                  color="inherit"
                  component={Link}
                  endIcon={(
                    <SvgIcon fontSize="small">
                      <ArrowRightIcon />
                    </SvgIcon>
                  )}
                  href={paths.dashboard.organization.index}
                  size="small"
                >
                  Orders
                </Button>
              ),
              icon: (
                <SvgIcon fontSize="small">
                  <ShoppingCartIcon />
                </SvgIcon>
              ),
              label: 'Orders',
              value: 3450
            },
            {
              action: (
                <Button
                  color="inherit"
                  component={Link}
                  endIcon={(
                    <SvgIcon fontSize="small">
                      <ArrowRightIcon />
                    </SvgIcon>
                  )}
                  href={paths.dashboard.products.index}
                  size="small"
                >
                  Products
                </Button>
              ),
              icon: (
                <SvgIcon fontSize="small">
                  <CubeIcon />
                </SvgIcon>
              ),
              label: 'Products',
              value: 68
            },
            {
              action: (
                <Button
                  color="inherit"
                  component={Link}
                  endIcon={(
                    <SvgIcon fontSize="small">
                      <ArrowRightIcon />
                    </SvgIcon>
                  )}
                  href={paths.dashboard.invoices.index}
                  size="small"
                >
                  Invoices
                </Button>
              ),
              icon: (
                <SvgIcon fontSize="small">
                  <CreditCardIcon />
                </SvgIcon>
              ),
              label: 'Transactions',
              value: 3120
            }
          ].map((item) => (
            <Grid
              xs={12}
              md={4}
              key={item.label}
            >
              <OverviewSummary
                action={item.action}
                icon={item.icon}
                label={item.label}
                value={item.value}
              />
            </Grid>
          ))}
          <Grid xs={12}>
            <OverviewBills
              chartSeries={[
                {
                  data: [12, 24, 36, 48, 60, 72, 84],
                  name: 'Due'
                },
                {
                  data: [18, 36, 48, 60, 72, 84, 96],
                  name: 'Overdue'
                }
              ]}
              stats={[
                {
                  label: 'Draft',
                  value: '$191.02'
                },
                {
                  label: 'Awaiting delivery',
                  value: '$320.50'
                },
                {
                  label: 'Due',
                  value: '$3,800.00'
                },
                {
                  label: 'Overdue',
                  value: '$3,500.00'
                }
              ]}
            />
          </Grid>
          <Grid
            xs={12}
            md={6}
          >
            <OverviewOrdersSummary
              chartSeries={[60, 20, 15, 5]}
              labels={['Complete', 'Pending', 'Canceled', 'Refunded']}
            />
          </Grid>
          <Grid
            xs={12}
            md={6}
          >
            <OverviewLatestCustomers
              customers={[
                {
                  id: 'a105ac46530704806ca58ede',
                  amountSpent: 684.45,
                  avatar: '/assets/avatars/avatar-fabiano-jorioz.jpg',
                  createdAt: subDays(subHours(subMinutes(now, 7), 3), 2).getTime(),
                  isOnboarded: true,
                  name: 'Fabiano Jorioz',
                  orders: 2
                },
                {
                  id: '126ed71fc9cbfabc601c56c5',
                  amountSpent: 0,
                  avatar: '/assets/avatars/avatar-meggie-heinonen.jpg',
                  createdAt: subDays(subHours(subMinutes(now, 7), 3), 2).getTime(),
                  isOnboarded: false,
                  name: 'Meggie Heinonen',
                  orders: 0
                },
                {
                  id: 'aafaeb0545357922aff32a7b',
                  amountSpent: 32.25,
                  avatar: '/assets/avatars/avatar-sean-picott.jpg',
                  createdAt: subDays(subHours(subMinutes(now, 11), 2), 3).getTime(),
                  isOnboarded: true,
                  name: 'Sean Picott',
                  orders: 1
                },
                {
                  id: '16b526d9e0fefe53f7eba66b',
                  amountSpent: 0,
                  avatar: '/assets/avatars/avatar-bell-covely.jpg',
                  createdAt: subDays(subHours(subMinutes(now, 18), 9), 5).getTime(),
                  isOnboarded: true,
                  name: 'Bell Covely',
                  orders: 0
                },
                {
                  id: 'fe035356923629912236d9a2',
                  amountSpent: 125.70,
                  avatar: '/assets/avatars/avatar-giraud-lamlin.jpg',
                  createdAt: subDays(subHours(subMinutes(now, 19), 18), 7).getTime(),
                  isOnboarded: false,
                  name: 'Giraud Lamlin',
                  orders: 1
                }
              ]}
            />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

Page.getLayout = (page) => (
  <DashboardLayout>
    <ReportsLayout>
      {page}
    </ReportsLayout>
  </DashboardLayout>
);

export default Page;
