import LocalizedStrings from 'react-native-localization';
import {
  English,
  Afrikaan,
  Arabic,
  Bengali,
  Chinese,
  Danish,
  Dutch,
  Filipino,
} from './Languages';

const Strings = new LocalizedStrings({
  en: English,
  ar: Arabic,
  bn: Bengali,
  zh: Chinese,
  da: Danish,
  nl: Dutch,
  fil: Filipino,
  af: Afrikaan,
});

export default Strings;
