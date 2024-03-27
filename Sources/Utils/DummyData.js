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
      title: Strings.US,
      value: 'en',
    },
    {
      image: Images.Afrikaans,
      title: Strings.Afrikaans,
      value: 'af',
    },
    {
      image: Images.Arabic,
      title: Strings.Arabic,
      value: 'ar',
    },
    {
      image: Images.Bengali,
      title: Strings.Bengali,
      value: 'bn',
    },
    {
      image: Images.Chinese,
      title: Strings.Chinese,
      value: 'zh',
    },
    {
      image: Images.Danish,
      title: Strings.Danish,
      value: 'da',
    },
    {
      image: Images.Dutch,
      title: Strings.Dutch,
      value: 'nl',
    },
    {
      image: Images.Filipino,
      title: Strings.Filipino,
      value: 'fil',
    },
  ],
  Drawer: [
    {
      image: Images.Home,
      title: Strings.Home,
    },
    {
      image: Images.InviteFriends,
      title: Strings.ShareThisApp,
      share: true,
    },
    {
      image: Images.RateUs,
      title: Strings.RateUs,
      rateUs: true,
    },
    {
      image: Images.PrivacyPolicy,
      title: Strings.PrivacyPolicy,
      privacyPolicy: true,
    },
    {
      image: Images.AboutUs,
      title: Strings.AboutUs,
      aboutUs: true,
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
  FAQ: [
    {
      title: Strings.FAQ_Quesion_1,
    },
    {
      title: Strings.FAQ_Quesion_2,
    },
    {
      title: Strings.FAQ_Quesion_3,
    },
    {
      title: Strings.FAQ_Quesion_4,
    },
    {
      title: Strings.FAQ_Quesion_5,
    },
    {
      title: Strings.FAQ_Quesion_6,
    },
    {
      title: Strings.FAQ_Quesion_7,
    },
  ],
  Theory: {
    Tabs: [
      { label: Strings.Bank, value: 0 },
      { label: Strings.Finance, value: 1 },
      { label: Strings.Business, value: 2 },
      { label: Strings.Stock, value: 3 },
    ],
    TabContent: {
      0: [
        {
          image: Images.Bank_LoanEligibility,
          title: Strings.LoanEligibility,
          text: Strings.Theory,
        },
        {
          image: Images.Bank_CompareLoans,
          title: Strings.CompareLoan,
          text: Strings.Theory,
        },
        {
          image: Images.Bank_FD,
          title: Strings.FD,
          text: Strings.Theory,
        },
        {
          image: Images.Bank_RD,
          title: Strings.RD,
          text: Strings.Theory,
        },
        {
          image: Images.Bank_Saving,
          title: Strings.Saving,
          text: Strings.Theory,
        },
        {
          image: Images.Bank_LoanToDepositeRatio,
          title: Strings.LoanToDepositRatio,
          text: Strings.Theory,
        },
        {
          image: Images.Bank_CreditCardPayOff,
          title: Strings.CreditCardPayoff,
          text: Strings.Theory,
        },
        {
          image: Images.Bank_Accounting,
          title: Strings.Accounting,
          text: Strings.Theory,
        },
        {
          image: Images.Bank_TypesOfBanks,
          title: Strings.TypesOfBanks,
          text: Strings.Theory,
        },
        {
          image: Images.Bank_Auditing,
          title: Strings.Auditing,
          text: Strings.Theory,
        },
        {
          image: Images.Bank_Loans,
          title: Strings.Loans,
          text: Strings.Theory,
        },
      ],
      1: [
        {
          image: Images.Finance_PPF,
          title: Strings.PPF,
          text: Strings.Theory,
        },
        {
          image: Images.Finance_SimpleCompoundInterest,
          title: Strings.SimpleandCompoundInterest,
          text: Strings.Theory,
        },
        {
          image: Images.Finance_SWP,
          title: Strings.SWP,
          text: Strings.Theory,
        },
        {
          image: Images.Finance_SIP,
          title: Strings.SIP,
          text: Strings.Theory,
        },
        {
          image: Images.Finance_Lumpsum,
          title: Strings.Lumpsum,
          text: Strings.Theory,
        },
        {
          image: Images.Finance_EMI,
          title: Strings.EMI,
          text: Strings.Theory,
        },
        {
          image: Images.Finance_Mortgage,
          title: Strings.MortgageCalculator,
          text: Strings.Theory,
        },
        {
          image: Images.Finance_TVM,
          title: Strings.TVMCalculator,
          text: Strings.Theory,
        },
        {
          image: Images.Finance_Bond,
          title: Strings.BondCalculation,
          text: Strings.Theory,
        },
        {
          image: Images.Finance_IRR,
          title: Strings.IRRCalculator,
          text: Strings.Theory,
        },
        {
          image: Images.Finance_CashFlow,
          title: Strings.CashFlow,
          text: Strings.Theory,
        },
        {
          image: Images.Finance_BondValueation,
          title: Strings.BondValuation,
          text: Strings.Theory,
        },
        {
          image: Images.Finance_SecurityMarket,
          title: Strings.SecurityMarketEfficiency,
          text: Strings.Theory,
        },
        {
          image: Images.Finance_CapitalStructure,
          title: Strings.CapitalStructure,
          text: Strings.Theory,
        },
      ],
      2: [
        {
          image: Images.Business_GrossProfit,
          title: Strings.GrossProfit,
          text: Strings.Theory,
        },
        {
          image: Images.Business_CostOfGoods,
          title: Strings.CostOfGoodsSold,
          text: Strings.Theory,
        },
        {
          image: Images.Business_BCG,
          title: Strings.BCGMatrix,
          text: Strings.Theory,
        },
        {
          image: Images.Business_SWOT,
          title: Strings.SWOTAnalysis,
          text: Strings.Theory,
        },
        {
          image: Images.Business_Product,
          title: Strings.ProductLifecycle,
          text: Strings.Theory,
        },
        {
          image: Images.Business_Change,
          title: Strings.ChangeCurve,
          text: Strings.Theory,
        },
        {
          image: Images.Business_Pyramid,
          title: Strings.PyramidOfResult,
          text: Strings.Theory,
        },
      ],
      3: [
        {
          image: Images.Stock_StockReturn,
          title: Strings.StockReturnsandCapitalGain,
          text: Strings.Theory,
        },
        {
          image: Images.Stock_PE,
          title: Strings.PERatio,
          text: Strings.Theory,
        },
        {
          image: Images.Stock_Fibonacci,
          title: Strings.FibonacciLevel,
          text: Strings.Theory,
        },
        {
          image: Images.Stock_Share,
          title: Strings.ShareMarket,
          text: Strings.Theory,
        },
        {
          image: Images.Stock_BullBear,
          title: Strings.WhatIsBullandBearMarket,
          text: Strings.Theory,
        },
        {
          image: Images.Stock_TopDown,
          title: Strings.TopDownBottomandMarket,
          text: Strings.Theory,
        },
      ],
    },
  },
  SimpleAndCompound: {
    dropdownData: [
      { label: Strings.Simple, value: Strings.Simple },
      { label: Strings.Compound, value: Strings.Compound },
    ],
  },
  CurrencyConversion: {
    currencies: [
      { label: Strings.INR, value: Strings.INR, text: 0 },
      { label: Strings.Dollar, value: Strings.Dollar, text: 0 },
      { label: Strings.Euro, value: Strings.Euro, text: 0 },
      { label: Strings.Dihram, value: Strings.Dihram, text: 0 },
      { label: Strings.Yen, value: Strings.Yen, text: 0 },
      { label: Strings.Pound, value: Strings.Pound, text: 0 },
    ],
    exchangeRates: {
      INR: 1,
      Dollar: 0.012002,
      Euro: 0.011086,
      Dihram: 0.044,
      Yen: 1.820458,
      Pound: 0.009513,
    },
  },
};

export default DummyData;
