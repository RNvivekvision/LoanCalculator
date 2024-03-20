import { Images, Strings } from '../Constants';
import { NavRoutes } from '../Navigation';

const DummyData = {
  onboarding: [
    {
      image: Images.onboarding_0,
      title: Strings.onBoardingTitle1,
      text: Strings.onBoardingText1,
    },
    {
      image: Images.onboarding_1,
      title: Strings.onBoardingTitle2,
      text: Strings.onBoardingText2,
    },
    {
      image: Images.onboarding_2,
      title: Strings.onBoardingTitle3,
      text: Strings.onBoardingText3,
    },
  ],
  termsAndCondition: [
    {
      image: Images.Terms,
      title: Strings.Terms,
      text: Strings.termsDesc,
    },
    {
      image: Images.OurPromise,
      title: Strings.OurPromise,
      text: Strings.OurPromiseDesc,
    },
    {
      image: Images.Safeguard,
      title: Strings.Safeguard,
      text: Strings.SafeguardDesc,
    },
    {
      image: Images.Announcing,
      title: Strings.Announcing,
      text: Strings.AnnouncingDesc,
    },
    {
      image: Images.Notice,
      title: Strings.Notice,
      text: Strings.NoticeDesc,
    },
  ],
  LanguageSelection: [
    {
      image: Images.US,
      title: 'United States (US)',
    },
    {
      image: Images.Afrikaans,
      title: 'Afrikaans',
    },
    {
      image: Images.Arabic,
      title: 'Arabic',
    },
    {
      image: Images.Bengali,
      title: 'Bengali',
    },
    {
      image: Images.Chinese,
      title: 'Chinese',
    },
    {
      image: Images.Danish,
      title: 'Danish',
    },
    {
      image: Images.Dutch,
      title: 'Dutch',
    },
    {
      image: Images.Filipino,
      title: 'Filipino',
    },
  ],
  Drawer: [
    {
      image: Images.Home,
      title: Strings.Home,
      Navigate: NavRoutes.Home,
    },
    {
      image: Images.InviteFriends,
      title: Strings.ShareThisApp,
    },
    {
      image: Images.RateUs,
      title: Strings.RateUs,
    },
    {
      image: Images.PrivacyPolicy,
      title: Strings.PrivacyPolicy,
    },
    {
      image: Images.AboutUs,
      title: Strings.AboutUs,
    },
  ],
  Home: {
    emi: [
      {
        image: Images.LoanEligibility,
        title: Strings.LoanEligibility,
        navigate: NavRoutes.LoanEligibility,
      },
      {
        image: Images.CompareLoans,
        title: Strings.CompareLoans,
        navigate: NavRoutes.CompareLoans,
      },
      {
        image: Images.TaxCalculation,
        title: Strings.TaxCalculation,
        navigate: NavRoutes.TaxCalculation,
      },
    ],
    investment: [
      {
        image: Images.SWP,
        title: Strings.SystematicWithdrawalPlan,
        navigate: NavRoutes.SWP,
      },
      {
        image: Images.SIP,
        title: Strings.SystematicInvestmentPlan,
        navigate: NavRoutes.SIP,
      },
      {
        image: Images.ELS,
        title: Strings.EquityLinkedSavingScheme,
        navigate: NavRoutes.EquityLinkedScheme,
      },
      {
        image: Images.LumpsumCalculator,
        title: Strings.LumpsumCalculator,
        navigate: NavRoutes.Lumpsum,
      },
    ],
    finance: [
      {
        image: Images.FixedDeposit,
        title: Strings.FixedDeposit,
        navigate: NavRoutes.FixedDeposit,
      },
      {
        image: Images.RecurringDeposit,
        title: Strings.RecurringDeposit,
        navigate: NavRoutes.RecurringDeposit,
      },
      {
        image: Images.PublicProvidentFund,
        title: Strings.PublicProvidentFund,
        navigate: NavRoutes.PublicProvidentFund,
      },
      {
        image: Images.SimpleCompound,
        title: Strings.SimpleAndCompound,
        navigate: NavRoutes.SimpleAndCompound,
      },
      {
        image: Images.CurrencyConversion,
        title: Strings.CurrencyConversion,
        navigate: NavRoutes.CurrencyConversion,
      },
    ],
    business: [
      {
        image: Images.Discount,
        title: Strings.DiscountCalculator,
        navigate: NavRoutes.DiscountCalculator,
      },
      {
        image: Images.Price,
        title: Strings.PriceCalculator,
        navigate: NavRoutes.PriceCalculator,
      },
      {
        image: Images.Margin,
        title: Strings.MarginCalculator,
        navigate: NavRoutes.MarginCalculator,
      },
      {
        image: Images.Markup,
        title: Strings.MarkupCalculator,
        navigate: NavRoutes.MarkupCalculator,
      },
      {
        image: Images.OperatingMargin,
        title: Strings.OperatingMargin,
        navigate: NavRoutes.OperatingMargin,
      },
      {
        image: Images.MarginWithSales,
        title: Strings.MarginWithSales,
        navigate: NavRoutes.MarginWithSales,
      },
    ],
    bankFinder: [
      {
        image: Images.BankFinder,
        title: Strings.BankFinder,
        navigate: NavRoutes.BankFinder,
      },
      {
        image: Images.ATMFinder,
        title: Strings.ATMFinder,
        navigate: NavRoutes.ATMFinder,
      },
    ],
    moreOptions: [
      {
        image: Images.AllCalculatorTheory,
        title: Strings.AllCalculatorTheory,
        navigate: NavRoutes.AllCalculatorTheory,
      },
      {
        image: Images.FAQ,
        title: Strings.FAQ,
        navigate: NavRoutes.FAQ,
      },
    ],
  },
};

export default DummyData;
