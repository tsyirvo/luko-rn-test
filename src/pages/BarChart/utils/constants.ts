import { Platform } from 'react-native';

// GENERIC
const isAndroid = Platform.OS === 'android';

// VALUES
const MARGIN = 24;

// LEGENDS
const daily = ['0', '4', '8', '12', '16', '20', ''];
const weekly = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const monthly = ['1', '7', '13', '19', '25', '31'];
const yearly = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

// OPTIONS
const chartOptions = {
  daily: {
    barCount: 24,
    androidBarWidth: 4,
    legends: daily,
  },
  weekly: {
    barCount: 7,
    androidBarWidth: 12,
    legends: weekly,
  },
  monthly: {
    barCount: 31,
    androidBarWidth: 4,
    legends: monthly,
  },
  yearly: {
    barCount: 12,
    androidBarWidth: 8,
    legends: yearly,
  },
};

// LEGENDS STEPS
const supportedSteps = [
  2,
  5,
  10,
  25,
  50,
  100,
  150,
  200,
  250,
  500,
  1000,
  2000,
  2500,
  3000,
  5000,
  7500,
  10000,
  15000,
  20000,
  25000,
];

export { isAndroid, MARGIN, chartOptions, supportedSteps };
