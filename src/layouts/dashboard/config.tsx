import type { ReactNode } from 'react';
import { SvgIcon } from '@mui/material';
import { paths } from '../../paths';
import BagIcon from '../../icons/iconly/bulk/bag';
import BuyIcon from '../../icons/iconly/bulk/buy';
import CalendarIcon from '../../icons/iconly/bulk/calendar';
import CategoryIcon from '../../icons/iconly/bulk/category';
import ChartIcon from '../../icons/iconly/bulk/chart';
import DocumentIcon from '../../icons/iconly/bulk/document';
import GraphIcon from '../../icons/iconly/bulk/graph';
import SettingsIcon from '../../icons/iconly/bulk/settings';
import ThreeUserIcon from '../../icons/iconly/bulk/three-user';
import TicketIcon from '../../icons/iconly/bulk/ticket';
import TwoUserIcon from '../../icons/iconly/bulk/two-user';
import ShowIcon from '../../icons/iconly/bulk/show';

export interface Item {
  external?: boolean;
  icon?: ReactNode;
  items?: Item[];
  path?: string;
  title: string;
}

export const items: Item[] = [
  {
    title: 'Overview',
    path: paths.dashboard.index,
    icon: (
      <SvgIcon>
        <GraphIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Sales',
    path: paths.dashboard.sales,
    icon: (
      <SvgIcon>
        <ChartIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Customers',
    path: paths.dashboard.customers.index,
    icon: (
      <SvgIcon>
        <TwoUserIcon />
      </SvgIcon>
    ),
    items: [
      {
        title: 'List',
        path: paths.dashboard.customers.index
      },
      {
        title: 'Summary',
        path: paths.dashboard.customers.details.index
      },
      {
        title: 'Orders',
        path: paths.dashboard.customers.details.orders
      },
      {
        title: 'Activity',
        path: paths.dashboard.customers.details.activity
      }
    ]
  },
  {
    title: 'Orders',
    path: paths.dashboard.orders.index,
    icon: (
      <SvgIcon>
        <BuyIcon />
      </SvgIcon>
    ),
    items: [
      {
        title: 'List',
        path: paths.dashboard.orders.index
      },
      {
        title: 'Summary',
        path: paths.dashboard.orders.details
      }
    ]
  },
  {
    title: 'Products',
    path: paths.dashboard.products.index,
    icon: (
      <SvgIcon>
        <BagIcon />
      </SvgIcon>
    ),
    items: [
      {
        title: 'List',
        path: paths.dashboard.products.index
      },
      {
        title: 'Summary',
        path: paths.dashboard.products.details.index
      },
      {
        title: 'Inventory',
        path: paths.dashboard.products.details.inventory
      },
      {
        title: 'Insights',
        path: paths.dashboard.products.details.insights
      }
    ]
  },
  {
    title: 'Invoices',
    path: paths.dashboard.invoices.index,
    icon: (
      <SvgIcon>
        <TicketIcon />
      </SvgIcon>
    ),
    items: [
      {
        title: 'List',
        path: paths.dashboard.invoices.index
      },
      {
        title: 'Create',
        path: paths.dashboard.invoices.create
      },
      {
        title: 'Details',
        path: paths.dashboard.invoices.details.index
      },
      {
        title: 'Preview',
        path: paths.dashboard.invoices.details.preview
      }
    ]
  },
  {
    title: 'Account',
    path: paths.dashboard.account.index,
    icon: (
      <SvgIcon>
        <SettingsIcon />
      </SvgIcon>
    ),
    items: [
      {
        title: 'General Settings',
        path: paths.dashboard.account.index
      },
      {
        title: 'Notifications',
        path: paths.dashboard.account.notifications
      }
    ]
  },
  {
    title: 'Organization',
    path: paths.dashboard.organization.index,
    icon: (
      <SvgIcon>
        <ThreeUserIcon />
      </SvgIcon>
    ),
    items: [
      {
        title: 'General Settings',
        path: paths.dashboard.organization.index
      },
      {
        title: 'Team',
        path: paths.dashboard.organization.team
      },
      {
        title: 'Billing',
        path: paths.dashboard.organization.billing
      }
    ]
  },
  {
    title: 'Calendar',
    path: paths.dashboard.calendar,
    icon: (
      <SvgIcon>
        <CalendarIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Foundation',
    icon: (
      <SvgIcon>
        <ShowIcon />
      </SvgIcon>
    ),
    items: [
      {
        title: 'Typography',
        path: paths.dashboard.foundation.typography
      },
      {
        title: 'Colors',
        path: paths.dashboard.foundation.colors
      },
      {
        title: 'Shadows',
        path: paths.dashboard.foundation.shadows
      },
      {
        title: 'Buttons',
        path: paths.dashboard.foundation.buttons
      },
      {
        title: 'Inputs',
        path: paths.dashboard.foundation.inputs
      },
      {
        title: 'Tables',
        path: paths.dashboard.foundation.tables
      },
      {
        title: 'Blank Page',
        path: paths.dashboard.foundation.blank
      }
    ]
  },
  {
    title: 'Components',
    icon: (
      <SvgIcon>
        <CategoryIcon />
      </SvgIcon>
    ),
    items: [
      {
        title: 'Data States',
        path: paths.dashboard.components.dataStates
      },
      {
        title: 'Lists',
        path: paths.dashboard.components.lists
      },
      {
        title: 'Stats',
        path: paths.dashboard.components.stats
      },
      {
        title: 'Page Headings',
        path: paths.dashboard.components.pageHeadings
      },
      {
        title: 'Card Headings',
        path: paths.dashboard.components.cardHeadings
      },
      {
        title: 'Image Uploader',
        path: paths.dashboard.components.imageUploader
      },
      {
        title: 'Onboarding',
        path: paths.dashboard.components.onboarding
      }
    ]
  },
  {
    title: 'Documentation',
    path: paths.docs.welcome,
    external: true,
    icon: (
      <SvgIcon>
        <DocumentIcon />
      </SvgIcon>
    )
  }
];
