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
};

export default DummyData;
