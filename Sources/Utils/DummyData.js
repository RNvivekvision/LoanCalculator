import { Images, Strings } from '../Constants';
import { NavRoutes } from '../Navigation';

const DummyData = {
  drawerScreens: [
    {
      name: Strings.Users,
      icon: Images.Products,
      navigate: NavRoutes.Users,
    },
    {
      name: Strings.Products,
      icon: Images.Products,
      navigate: NavRoutes.Products,
    },
    {
      name: Strings.Businesses,
      icon: Images.Businesses,
      navigate: NavRoutes.Business,
    },
    {
      name: Strings.Contracts,
      icon: Images.Contracts,
      navigate: NavRoutes.Mine,
    },
    {
      name: Strings.Deliveries,
      icon: Images.Deliveries,
    },
    {
      name: Strings.Storage,
      icon: Images.Storage,
    },
    {
      name: Strings.Invoicing,
      icon: Images.Invoicing,
    },
    {
      name: Strings.KnMgmt,
      icon: Images.knMgmt,
    },
    {
      name: Strings.Templates,
      icon: Images.Templates,
    },
    {
      name: Strings.StandingData,
      icon: Images.StandingData,
    },
    {
      name: Strings.Modules,
      icon: Images.Modules,
    },
    {
      name: Strings.DBAdmin,
      icon: Images.DBAdmin,
    },
    {
      name: Strings.Archive,
      icon: Images.Archive,
    },
    {
      name: Strings.Reports,
      icon: Images.Reports,
    },
    {
      name: Strings.Settings,
      icon: Images.Settings,
    },
  ],
  LatestNewUsers: [
    {
      name: 'Vana Starykova(YSt)',
      number: 'Mo.no: (480) 555-0103',
      profilePic: Images.Dummy_user1,
      isLive: true,
    },
    {
      name: 'Jason Boyd',
      number: 'Mo.no: (480) 555-0103',
      profilePic: Images.Dummy_user1,
      isLive: false,
    },
    {
      name: 'Jane Barker',
      number: 'Mo.no: (480) 555-0103',
      profilePic: Images.Dummy_user1,
      isLive: false,
    },
    {
      name: 'Alberta Edwards',
      number: 'Mo.no: (480) 555-0103',
      profilePic: Images.Dummy_user1,
      isLive: true,
    },
    {
      name: 'Floyd Patrick',
      number: 'Mo.no: (480) 555-0103',
      profilePic: Images.Dummy_user1,
      isLive: false,
    },
    {
      name: 'Dean McDaniel',
      number: 'Mo.no: (480) 555-0103',
      profilePic: Images.Dummy_user1,
      isLive: true,
    },
    {
      name: 'Lou Morgan',
      number: 'Mo.no: (480) 555-0103',
      profilePic: Images.Dummy_user1,
      isLive: false,
    },
    {
      name: 'Charlie Paul',
      number: 'Mo.no: (480) 555-0103',
      profilePic: Images.Dummy_user1,
      isLive: false,
    },
  ],
  ProductFilterDropDown: {
    UserRights: [
      { label: 'User Right 1', value: 'User Right 1' },
      { label: 'User Right 2', value: 'User Right 2' },
      { label: 'User Right 3', value: 'User Right 3' },
      { label: 'User Right 4', value: 'User Right 4' },
      { label: 'User Right 5', value: 'User Right 5' },
      { label: 'User Right 6', value: 'User Right 6' },
      { label: 'User Right 7', value: 'User Right 7' },
      { label: 'User Right 8', value: 'User Right 8' },
    ],
    Entities: [
      { label: 'Entities 1', value: 'Entities 1' },
      { label: 'Entities 2', value: 'Entities 2' },
      { label: 'Entities 3', value: 'Entities 3' },
      { label: 'Entities 4', value: 'Entities 4' },
      { label: 'Entities 5', value: 'Entities 5' },
      { label: 'Entities 6', value: 'Entities 6' },
      { label: 'Entities 7', value: 'Entities 7' },
      { label: 'Entities 8', value: 'Entities 8' },
    ],
    ShortName: [
      { label: 'ShortName 1', value: 'ShortName 1' },
      { label: 'ShortName 2', value: 'ShortName 2' },
      { label: 'ShortName 3', value: 'ShortName 3' },
      { label: 'ShortName 4', value: 'ShortName 4' },
      { label: 'ShortName 5', value: 'ShortName 5' },
      { label: 'ShortName 6', value: 'ShortName 6' },
      { label: 'ShortName 7', value: 'ShortName 7' },
      { label: 'ShortName 8', value: 'ShortName 8' },
    ],
    UserName: [
      { label: 'Username 1', value: 'Username 1' },
      { label: 'Username 2', value: 'Username 2' },
      { label: 'Username 3', value: 'Username 3' },
      { label: 'Username 4', value: 'Username 4' },
      { label: 'Username 5', value: 'Username 5' },
      { label: 'Username 6', value: 'Username 6' },
      { label: 'Username 7', value: 'Username 7' },
      { label: 'Username 8', value: 'Username 8' },
    ],
  },
  UserProfile: {
    Languages: [
      { label: 'English', value: 'English' },
      { label: 'Hindi', value: 'Hindi' },
      { label: 'Gujarati', value: 'Gujarati' },
      { label: 'Chinese', value: 'Chinese' },
      { label: 'Marathi', value: 'Marathi' },
      { label: 'Tamil', value: 'Tamil' },
      { label: 'Malyalam', value: 'Malyalam' },
      { label: 'Portuguise', value: 'Portuguise' },
    ],
    UserDetail: [
      {
        title: 'User Name',
        text: 'ystarykova',
      },
      {
        title: 'Short Name',
        text: 'Yst',
      },
      {
        title: 'Language',
        text: 'English',
      },
      {
        title: 'Email',
        text: 'yst@hrms-ag.com',
      },
    ],
    EntitiesAndRights: [
      {
        title: 'HMS AG',
        text: 'Accounts User, Ops Admin',
      },
      {
        title: 'HMS Coal',
        text: 'Trader User, Accounts User Admin OPs Admin',
      },
    ],
  },
  Rights: [
    {
      title: 'Select All',
      selectAll: true,
    },
    {
      title: 'Account User',
    },
    {
      title: 'Account User Admin',
    },
    {
      title: 'Storage Admin',
    },
    {
      title: 'Trader User',
    },
    {
      title: 'Storage User',
    },
    {
      title: 'Ops User',
    },
    {
      title: 'Ops Admin',
    },
  ],
  Business: {
    LatestBusinessList: [
      {
        name: 'RIL/Banpu 2024',
        number: 'B752',
      },
      {
        name: 'RIL/Banpu 2024',
        number: 'B752',
      },
      {
        name: 'RIL/Banpu 2024',
        number: 'B752',
      },
      {
        name: 'RIL/Banpu 2024',
        number: 'B752',
      },
      {
        name: 'RIL/Banpu 2024',
        number: 'B752',
      },
      {
        name: 'RIL/Banpu 2024',
        number: 'B752',
      },
      {
        name: 'RIL/Banpu 2024',
        number: 'B752',
      },
      {
        name: 'RIL/Banpu 2024',
        number: 'B752',
      },
    ],
    AllBusinessList: [
      {
        name: 'RIL/Banpi 2024',
        number: 'Mo.no: (480) 555-0103',
      },
      {
        name: 'RIL/Banpi 2024',
        number: 'Mo.no: (480) 555-0103',
      },
      {
        name: 'RIL/Banpi 2024',
        number: 'Mo.no: (480) 555-0103',
      },
      {
        name: 'RIL/Banpi 2024',
        number: 'Mo.no: (480) 555-0103',
      },
      {
        name: 'RIL/Banpi 2024',
        number: 'Mo.no: (480) 555-0103',
      },
      {
        name: 'RIL/Banpi 2024',
        number: 'Mo.no: (480) 555-0103',
      },
      {
        name: 'RIL/Banpi 2024',
        number: 'Mo.no: (480) 555-0103',
      },
      {
        name: 'RIL/Banpi 2024',
        number: 'Mo.no: (480) 555-0103',
      },
      {
        name: 'RIL/Banpi 2024',
        number: 'Mo.no: (480) 555-0103',
      },
      {
        name: 'RIL/Banpi 2024',
        number: 'Mo.no: (480) 555-0103',
      },
    ],
    BusinessDetails: [
      {
        title: 'Finance',
        data: [
          {
            title: 'AAr',
            isDark: false,
          },
          {
            title: 'AAr',
            isDark: true,
          },
          {
            pic: Images.Dummy_user1,
            isDark: false,
          },
          {
            title: 'AAr',
            isDark: false,
          },
          {
            pic: Images.Dummy_user1,
            isDark: false,
          },
          {
            title: 'AAr',
            isDark: true,
          },
          {
            title: 'AAr',
            isDark: true,
          },
          {
            pic: Images.Dummy_user1,
            isDark: false,
          },
          {
            title: 'AAr',
            isDark: false,
          },
          {
            title: 'AAr',
            isDark: false,
          },
        ],
      },
      {
        title: 'Opration',
        data: [
          {
            title: 'AAr',
            isDark: true,
          },
          {
            title: 'AAr',
            isDark: false,
          },
          {
            pic: Images.Dummy_user1,
            isDark: false,
          },
          {
            title: 'AAr',
            isDark: false,
          },
          {
            pic: Images.Dummy_user1,
            isDark: false,
          },
          {
            title: 'AAr',
            isDark: true,
          },
          {
            title: 'AAr',
            isDark: true,
          },
          {
            pic: Images.Dummy_user1,
            isDark: false,
          },
          {
            title: 'AAr',
            isDark: false,
          },
          {
            title: 'AAr',
            isDark: false,
          },
        ],
      },
    ],
    EmployeeDetails: [
      {
        title: 'Contracts',
        data: [
          {
            id: 'C409',
            partner: 'PT. Bharinto Ekatama PT',
            quantity: '400.000',
            price: 'ICI5000 3,00 USD',
            delivery: 'Jan - Apr 2024',
          },
          {
            id: 'C409',
            partner: 'PT. Bharinto Ekatama PT',
            quantity: '400.000',
            price: 'ICI5000 3,00 USD',
            delivery: 'Jan - Apr 2024',
          },
        ],
      },
      {
        title: 'Deliveries',
        data: [
          {
            id: 'C409',
            partner: 'PT. Bharinto Ekatama PT',
            quantity: '400.000',
            price: 'ICI5000 3,00 USD',
            delivery: 'Jan - Apr 2024',
          },
          {
            id: 'C409',
            partner: 'PT. Bharinto Ekatama PT',
            quantity: '400.000',
            price: 'ICI5000 3,00 USD',
            delivery: 'Jan - Apr 2024',
          },
        ],
      },
      {
        title: 'Outgoing Invocies',
        data: [
          {
            id: 'C409',
            partner: 'PT. Bharinto Ekatama PT',
            quantity: '400.000',
            price: 'ICI5000 3,00 USD',
            delivery: 'Jan - Apr 2024',
          },
          {
            id: 'C409',
            partner: 'PT. Bharinto Ekatama PT',
            quantity: '400.000',
            price: 'ICI5000 3,00 USD',
            delivery: 'Jan - Apr 2024',
          },
        ],
      },
      {
        title: 'Incoming Invoices',
        data: [
          {
            id: 'C409',
            partner: 'PT. Bharinto Ekatama PT',
            quantity: '400.000',
            price: 'ICI5000 3,00 USD',
            delivery: 'Jan - Apr 2024',
          },
          {
            id: 'C409',
            partner: 'PT. Bharinto Ekatama PT',
            quantity: '400.000',
            price: 'ICI5000 3,00 USD',
            delivery: 'Jan - Apr 2024',
          },
        ],
      },
    ],
  },
  Product: {
    ProductDetails: [
      {
        no: 'P706',
        shortName: 'Steinkohle / wesola',
        partner: 'Weglokos',
        specType: 'Steam Coal',
        country: 'Africa',
      },
      {
        no: 'P706',
        shortName: 'Steinkohle / wesola',
        partner: 'Weglokos',
        specType: 'Steam Coal',
        country: 'Africa',
      },
      {
        no: 'P706',
        shortName: 'Steinkohle / wesola',
        partner: 'Weglokos',
        specType: 'Steam Coal',
        country: 'Africa',
      },
      {
        no: 'P706',
        shortName: 'Steinkohle / wesola',
        partner: 'Weglokos',
        specType: 'Steam Coal',
        country: 'Africa',
      },
      {
        no: 'P706',
        shortName: 'Steinkohle / wesola',
        partner: 'Weglokos',
        specType: 'Steam Coal',
        country: 'Africa',
      },
      {
        no: 'P706',
        shortName: 'Steinkohle / wesola',
        partner: 'Weglokos',
        specType: 'Steam Coal',
        country: 'Africa',
      },
      {
        no: 'P706',
        shortName: 'Steinkohle / wesola',
        partner: 'Weglokos',
        specType: 'Steam Coal',
        country: 'Africa',
      },
      {
        no: 'P706',
        shortName: 'Steinkohle / wesola',
        partner: 'Weglokos',
        specType: 'Steam Coal',
        country: 'Africa',
      },
    ],
  },
};

export default DummyData;
