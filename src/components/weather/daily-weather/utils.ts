import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import { DATE_FORMAT, TIME_ZONE } from 'constants/common';

dayjs.extend(utc);
dayjs.extend(timezone);

export const formatDate = (date: dayjs.ConfigType, format = DATE_FORMAT) => {
  return dayjs(date).format(format);
};

export const computeDisplayDate = (
  date: string,
  format = DATE_FORMAT,
  tz = TIME_ZONE,
) => {
  // Get today in timezone $tz
  const today = dayjs.tz(dayjs(), tz);
  const givenDate = dayjs.tz(date, tz);
  if (today.get('day') === givenDate.get('day')) {
    return 'Today';
  }
  if (today.get('day') + 1 === givenDate.get('day')) {
    return 'Tomorrow';
  }

  return formatDate(date, format);
};
