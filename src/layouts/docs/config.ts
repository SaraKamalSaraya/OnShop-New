import type { ReactNode } from 'react';
import { paths } from '../../paths';

interface Item {
  external?: boolean;
  icon?: ReactNode;
  items?: Item[];
  label?: ReactNode;
  path?: string;
  title: string;
}

export interface Section {
  items: Item[];
  subheader?: string;
}

export const sections: Section[] = [
  {
    subheader: 'Overview',
    items: [
      {
        title: 'Welcome',
        path: paths.docs.welcome
      },
      {
        title: 'Getting Started',
        path: paths.docs.gettingStarted
      },
      {
        title: 'Dependencies',
        path: paths.docs.dependencies
      },
      {
        title: 'Environment Variables',
        path: paths.docs.environmentVariables
      },
      {
        title: 'Deployment',
        path: paths.docs.deployment
      },
      {
        title: 'Routing',
        path: paths.docs.routing
      },
      {
        title: 'Theming',
        path: paths.docs.theming
      },
      {
        title: 'Redux',
        path: paths.docs.redux
      },
      {
        title: 'Server Calls',
        path: paths.docs.serverCalls
      },
      {
        title: 'Settings',
        path: paths.docs.settings
      },
      {
        title: 'RTL',
        path: paths.docs.rtl
      },
      {
        title: 'Internationalization',
        path: paths.docs.internationalization
      }
    ]
  },
  {
    subheader: 'Authentication',
    items: [
      {
        title: 'Amplify',
        path: paths.docs.auth.amplify
      },
      {
        title: 'Auth0',
        path: paths.docs.auth.auth0
      },
      {
        title: 'Firebase',
        path: paths.docs.auth.firebase
      },
      {
        title: 'JWT',
        path: paths.docs.auth.jwt
      }
    ]
  },
  {
    subheader: 'Guards',
    items: [
      {
        title: 'Guest Guard',
        path: paths.docs.guards.guest
      },
      {
        title: 'Auth Guard',
        path: paths.docs.guards.auth
      },
      {
        title: 'Role Based Guard',
        path: paths.docs.guards.roleBased
      }
    ]
  },
  {
    subheader: 'Analytics',
    items: [
      {
        title: 'Introduction',
        path: paths.docs.analytics.introduction
      },
      {
        title: 'Configuration',
        path: paths.docs.analytics.configuration
      },
      {
        title: 'Event Tracking',
        path: paths.docs.analytics.eventTracking
      }
    ]
  },
  {
    subheader: 'Support',
    items: [
      {
        title: 'Changelog',
        path: paths.docs.changelog
      },
      {
        title: 'Contact',
        path: paths.docs.contact
      },
      {
        title: 'Further Support',
        path: paths.docs.furtherSupport
      }
    ]
  }
];
