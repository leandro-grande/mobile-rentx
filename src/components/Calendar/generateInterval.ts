import { eachDayOfInterval, format } from 'date-fns';
import { MarkedDates } from 'react-native-calendars/src/types';
import { DayProps } from '.';

import theme from '../../theme';
import { getPlataformDate } from '../../utils/getPlataformDate';

export const generateInterval = (start: DayProps, end: DayProps) => {
  let interval: MarkedDates = {}

  eachDayOfInterval({ start: new Date(start.timestamp), end: new Date(end.timestamp) })
  .forEach(( item ) => {
    const date = format(getPlataformDate(item), 'yyyy-MM-dd');

    interval = {
      ...interval,
      [date]: {
        color: start.dateString === date || end.dateString === date
        ? theme.color.main : theme.color.main_light,
        textColor: start.dateString === date || end.dateString === date
        ? theme.color.main_light : theme.color.main
      }
    }
  });
  
  return interval;
}