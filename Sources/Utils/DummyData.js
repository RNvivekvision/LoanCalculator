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
    },
    {
      image: Images.Afrikaans,
      title: Strings.Afrikaans,
    },
    {
      image: Images.Arabic,
      title: Strings.Arabic,
    },
    {
      image: Images.Bengali,
      title: Strings.Bengali,
    },
    {
      image: Images.Chinese,
      title: Strings.Chinese,
    },
    {
      image: Images.Danish,
      title: Strings.Danish,
    },
    {
      image: Images.Dutch,
      title: Strings.Dutch,
    },
    {
      image: Images.Filipino,
      title: Strings.Filipino,
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
    Tabs: [Strings.Bank, Strings.Finance, Strings.Business, Strings.Stock],
    TabContent: {
      Bank: [
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
      Finance: [
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
      Business: [
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
      Stock: [
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
};

export default DummyData;
