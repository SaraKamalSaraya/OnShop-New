import { subDays, subHours, subMinutes } from 'date-fns';
import type { Customer, CustomerLogs, CustomerNote, CustomerOrder } from '../../types/customer';

const now = new Date();

export const customers: Customer[] = [
  {
    id: 'a105ac46530704806ca58ede',
    street: '4 Scoville Street',
    avatar: '/assets/avatars/avatar-fabiano-jorioz.jpg',
    createdAt: subDays(subHours(subMinutes(now, 41), 11), 1).getTime(),
    dateOfBirth: '09/21/1998',
    email: 'fjoriozi@devias.io',
    isFavorite: false,
    isReturning: false,
    lastOrderDate: subDays(subHours(subMinutes(now, 12), 22), 1).getTime(),
    name: 'Fabiano Jorioz',
    orderedRecently: false,
    phone: '(322) 167-3824',
    status: 'active'
  },
  {
    id: '126ed71fc9cbfabc601c56c5',
    street: '1008 Morningstar Circle',
    avatar: '/assets/avatars/avatar-meggie-heinonen.jpg',
    createdAt: subDays(subHours(subMinutes(now, 7), 3), 2).getTime(),
    dateOfBirth: '09/21/1998',
    email: 'mheinonen2@devias.io',
    isFavorite: false,
    isReturning: false,
    lastOrderDate: subDays(subHours(subMinutes(now, 5), 8), 1).getTime(),
    name: 'Meggie Heinonen',
    orderedRecently: false,
    phone: '(706) 923-5237',
    status: 'inactive'
  },
  {
    id: 'aafaeb0545357922aff32a7b',
    street: '51926 Lighthouse Bay Parkway',
    avatar: '/assets/avatars/avatar-sean-picott.jpg',
    createdAt: subDays(subHours(subMinutes(now, 11), 2), 3).getTime(),
    dateOfBirth: '09/21/1998',
    email: 'spicott8@devias.io',
    isFavorite: false,
    isReturning: true,
    lastOrderDate: subDays(subHours(subMinutes(now, 52), 6), 2).getTime(),
    name: 'Sean Picott',
    orderedRecently: true,
    status: 'active'
  },
  {
    id: '16b526d9e0fefe53f7eba66b',
    street: '007 Boyd Avenue',
    avatar: '/assets/avatars/avatar-bell-covely.jpg',
    createdAt: subDays(subHours(subMinutes(now, 18), 9), 5).getTime(),
    dateOfBirth: '09/21/1998',
    email: 'bcovely1@devias.io',
    isFavorite: false,
    isReturning: false,
    lastOrderDate: subDays(subHours(subMinutes(now, 41), 16), 1).getTime(),
    name: 'Bell Covely',
    orderedRecently: false,
    phone: '(603) 472-3015',
    status: 'active'
  },
  {
    id: 'fe035356923629912236d9a2',
    street: '13475 Florence Way',
    avatar: '/assets/avatars/avatar-giraud-lamlin.jpg',
    createdAt: subDays(subHours(subMinutes(now, 19), 18), 7).getTime(),
    dateOfBirth: '09/21/1998',
    email: 'glamlin3@devias.io',
    isFavorite: true,
    isReturning: false,
    lastOrderDate: subDays(subHours(subMinutes(now, 1), 3), 2).getTime(),
    name: 'Giraud Lamlin',
    orderedRecently: true,
    phone: '(386) 276-7101',
    status: 'inactive'
  },
  {
    id: '059c4e3e9dca5eabfd566b83',
    street: '67 Jana Park',
    avatar: '/assets/avatars/avatar-adler-atthowe.jpg',
    createdAt: subDays(subHours(subMinutes(now, 19), 21), 8).getTime(),
    dateOfBirth: '09/21/1998',
    email: 'aatthowe6@devias.io',
    isFavorite: false,
    isReturning: false,
    lastOrderDate: subDays(subHours(subMinutes(now, 30), 16), 3).getTime(),
    name: 'Adler Atthowe',
    orderedRecently: false,
    status: 'active'
  },
  {
    id: '4895a867a0943f205a72448e',
    street: '61 Russell Way',
    avatar: '/assets/avatars/avatar-rustin-rathe.jpg',
    createdAt: subDays(subHours(subMinutes(now, 25), 9), 9).getTime(),
    dateOfBirth: '09/21/1998',
    email: 'rrathe0@devias.io',
    isFavorite: true,
    isReturning: false,
    lastOrderDate: subDays(subHours(subMinutes(now, 32), 9), 1).getTime(),
    name: 'Rustin Rathe',
    orderedRecently: false,
    phone: '(641) 789-4656',
    status: 'active'
  },
  {
    id: '647b75ff0197d921db04c5a1',
    street: '39613 Basil Road',
    avatar: '/assets/avatars/avatar-shelby-docherty.jpg',
    createdAt: subDays(subHours(subMinutes(now, 20), 7), 11).getTime(),
    dateOfBirth: '09/21/1998',
    email: 'sodocherty4@devias.io',
    isFavorite: true,
    isReturning: true,
    lastOrderDate: subDays(subHours(subMinutes(now, 27), 15), 5).getTime(),
    name: 'Shelby Docherty',
    orderedRecently: true,
    phone: '(440) 345-1150',
    status: 'inactive'
  },
  {
    id: 'a928d3823cca017b42d86bb0',
    street: '63 Lake View Drive',
    avatar: '/assets/avatars/avatar-jenilee-felderer.jpg',
    createdAt: subDays(subHours(subMinutes(now, 39), 19), 15).getTime(),
    dateOfBirth: '09/21/1998',
    email: 'jfelderer5@devias.io',
    isFavorite: false,
    isReturning: false,
    lastOrderDate: subDays(subHours(subMinutes(now, 44), 23), 9).getTime(),
    name: 'Jenilee Felderer',
    orderedRecently: false,
    status: 'active'
  },
  {
    id: '4c0eb19030f003cf4922bfdc',
    street: '923 Claremont Terrace',
    avatar: '/assets/avatars/avatar-candace-royden.jpg',
    createdAt: subDays(subHours(subMinutes(now, 45), 10), 17).getTime(),
    dateOfBirth: '09/21/1998',
    email: 'croyden7@devias.io',
    isFavorite: true,
    isReturning: true,
    lastOrderDate: subDays(subHours(subMinutes(now, 40), 13), 3).getTime(),
    name: 'Candace Royden',
    orderedRecently: true,
    phone: '(982) 654-2992',
    status: 'active'
  },
  {
    id: '359c0e8cafbab508ff0ab08c',
    street: '25 Kingsford Junction',
    avatar: '/assets/avatars/avatar-emelia-brizland.jpg',
    createdAt: subDays(subHours(subMinutes(now, 19), 14), 21).getTime(),
    dateOfBirth: '09/21/1998',
    email: 'ebrizland9@devias.io',
    isFavorite: false,
    isReturning: false,
    lastOrderDate: subDays(subHours(subMinutes(now, 14), 20), 20).getTime(),
    name: 'Emelia Brizland',
    orderedRecently: false,
    phone: '(694) 868-1976',
    status: 'active'
  },
  {
    id: 'c2c00e9998b8e2c795d8c9ce',
    street: '65909 Mayfield Lane',
    avatar: '/assets/avatars/avatar-priscilla-parades.jpg',
    createdAt: subDays(subHours(subMinutes(now, 27), 17), 23).getTime(),
    dateOfBirth: '09/21/1998',
    email: 'pparadesd@devias.io',
    isFavorite: true,
    isReturning: false,
    lastOrderDate: subDays(subHours(subMinutes(now, 52), 18), 15).getTime(),
    name: 'Priscilla Parades',
    orderedRecently: false,
    phone: '(966) 128-9837',
    status: 'inactive'
  },
  {
    id: 'd0f8f7a16f5f94ac13133411',
    street: '18 Eggendart Pass',
    avatar: '/assets/avatars/avatar-stefa-cattow.jpg',
    createdAt: subDays(subHours(subMinutes(now, 33), 5), 24).getTime(),
    dateOfBirth: '09/21/1998',
    email: 'scattowe@devias.io',
    name: 'Stefa Cattow',
    isFavorite: false,
    isReturning: false,
    lastOrderDate: subDays(subHours(subMinutes(now, 9), 12), 1).getTime(),
    orderedRecently: true,
    phone: '(299) 669-8130',
    status: 'active'
  },
  {
    id: 'df2283d9bb41521de7561860',
    street: '6562 Blackbird Crossing',
    avatar: '/assets/avatars/avatar-andi-jevons.jpg',
    createdAt: subDays(subHours(subMinutes(now, 54), 3), 26).getTime(),
    dateOfBirth: '09/21/1998',
    email: 'ajevonsf@devias.io',
    isFavorite: false,
    isReturning: true,
    lastOrderDate: subDays(subHours(subMinutes(now, 48), 4), 23).getTime(),
    name: 'Andi Jevons',
    orderedRecently: false,
    phone: '(536) 363-2846',
    status: 'active'
  },
  {
    id: 'd76c6ecb96b408dca4a8ad83',
    street: '57043 Del Sol Parkway',
    avatar: '/assets/avatars/avatar-wilhelm-engall.jpg',
    createdAt: subDays(subHours(subMinutes(now, 6), 23), 27).getTime(),
    dateOfBirth: '09/21/1998',
    email: 'wengallg@devias.io',
    isFavorite: false,
    isReturning: false,
    lastOrderDate: subDays(subHours(subMinutes(now, 9), 20), 15).getTime(),
    name: 'Wilhelm Engall',
    orderedRecently: false,
    phone: '(814) 804-8230',
    status: 'active'
  },
  {
    id: 'd68aaa2bfd36df75026a9023',
    street: '7957 Shopko Junction',
    avatar: '/assets/avatars/avatar-elbertine-broadhurst.jpg',
    createdAt: subDays(subHours(subMinutes(now, 24), 11), 28).getTime(),
    dateOfBirth: '09/21/1998',
    email: 'ebroadhursth@devias.io',
    isFavorite: true,
    isReturning: true,
    lastOrderDate: subDays(subHours(subMinutes(now, 21), 22), 16).getTime(),
    name: 'Elbertine Broadhurst',
    orderedRecently: false,
    status: 'active'
  },
  {
    id: 'f4fe662e675c9370ff5866d3',
    street: '01 Portage Junction',
    avatar: '/assets/avatars/avatar-eda-annies.jpg',
    createdAt: subDays(subHours(subMinutes(now, 29), 16), 45).getTime(),
    dateOfBirth: '09/21/1998',
    email: 'eanniesj@devias.io',
    isFavorite: true,
    isReturning: false,
    lastOrderDate: subDays(subHours(subMinutes(now, 11), 22), 31).getTime(),
    name: 'Eda Annies',
    orderedRecently: true,
    phone: '(877) 169-2776',
    status: 'active'
  }
];

export const customer: Customer = {
  id: 'a105ac46530704806ca58ede',
  street: '4 Scoville Street',
  avatar: '/assets/avatars/avatar-fabiano-jorioz.jpg',
  city: 'Berlin',
  country: 'Germany',
  createdAt: subDays(subHours(subMinutes(now, 39), 19), 15).getTime(),
  dateOfBirth: '09/21/1998',
  email: 'fjoriozi@devias.io',
  isTaxExempt: false,
  lastContactChannel: 'Organic',
  lastContactDate: subDays(subHours(subMinutes(now, 32), 5), 13).getTime(),
  lastOrderDate: subDays(subHours(subMinutes(now, 44), 23), 9).getTime(),
  name: 'Fabiano Jorioz',
  orderValue: 12200,
  ordersPlaced: 17,
  phone: '(322) 167-3824',
  status: 'active',
  storeCredit: 0
};

export const customerOrders: CustomerOrder[] = [
  {
    id: '5273',
    address: {
      street: '8502 Preston Rd. Inglewood, Maine 98380',
      city: 'Berlin',
      country: 'Germany'
    },
    courier: 'DHL',
    createdAt: new Date().getTime(),
    currency: '$',
    lineItems: [
      {
        currency: '$',
        discount: 0,
        image: '/assets/products/product-1.png',
        name: 'Watch with Leather Strap',
        quantity: 1,
        sku: 'BBAK01-A',
        subtotalAmount: 160,
        taxAmount: 32.5,
        totalAmount: 192.5,
        unitAmount: 160
      }
    ],
    paymentMethod: 'debit',
    status: 'delivered',
    subtotalAmount: 160,
    taxAmount: 32.5,
    totalAmount: 192.5,
    trackingCode: 'KDO020021',
    updatedAt: new Date().getTime()
  }
];

export const customerNotes: CustomerNote[] = [
  {
    id: '204add94eb454ac9b59c839f',
    authorId: '6208b869bbc127ed39b87e31',
    authorAvatar: '/assets/avatars/avatar-laurie-tardy.jpg',
    authorName: 'Laurie T.',
    content: 'I really enjoyed working with this client! She is a ray of sunshine every time I call her. She has a cat called Sticks which she loves very much',
    createdAt: subMinutes(now, 12).getTime()
  },
  {
    id: '5e86809283e28b96d2d38537',
    authorId: '5e86809283e28b96d2d38537',
    authorAvatar: '/assets/avatars/avatar-chen-simmons.jpg',
    authorName: 'Chen Simmons',
    content: 'Don’t call the client before 5 PM, trust me I know what I’m saying',
    createdAt: subMinutes(now, 78).getTime()
  }
];

export const customerLogs: CustomerLogs[] = [
  {
    id: '5ed013d09883e4149bc55c2e',
    createdAt: subMinutes(now, 12).getTime(),
    message: 'updated customer',
    subjectId: '5e86809283e28b96d2d38537',
    subjectAvatar: '/assets/avatars/avatar-chen-simmons.jpg',
    subjectName: 'Chen Simmons',
    type: 'updatedCustomer'
  },
  {
    id: '6b900fdedd2e2af1623439ce',
    createdAt: subMinutes(now, 50).getTime(),
    message: 'updated customer',
    subjectId: '5e86809283e28b96d2d38537',
    subjectAvatar: '/assets/avatars/avatar-chen-simmons.jpg',
    subjectName: 'Chen Simmons',
    type: 'updatedCustomer'
  },
  {
    id: '8d66063fc907c67db3966c97',
    createdAt: subDays(subMinutes(now, 17), 15).getTime(),
    message: 'triggered the action “Generate Invoice” on the customer',
    subjectId: '924d48e800babe1a0d174478',
    subjectAvatar: '/assets/avatars/avatar-horia-tepar.jpg',
    subjectName: 'Horia Tepar',
    type: 'generateInvoice'
  },
  {
    id: 'bd7dd269d6ff1db1764da986',
    createdAt: subDays(subMinutes(now, 54), 16).getTime(),
    message: 'triggered the action “Generate Invoice” on the customer',
    subjectId: '924d48e800babe1a0d174478',
    subjectAvatar: '/assets/avatars/avatar-horia-tepar.jpg',
    subjectName: 'Horia Tepar',
    type: 'generateInvoice'
  }
];
