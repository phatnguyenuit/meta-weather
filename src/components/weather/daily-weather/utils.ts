import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import isToday from 'dayjs/plugin/isToday';
import isTomorrow from 'dayjs/plugin/isTomorrow';
import { DATE_FORMAT, TIME_ZONE } from 'constants/common';

dayjs.extend(isTomorrow);
dayjs.extend(isToday);
dayjs.extend(utc);
dayjs.extend(timezone);

export const formatDate = (date: dayjs.ConfigType, format = DATE_FORMAT) => {
  return dayjs(date).format(format);
};

export const computeDisplayDate = (
  date: dayjs.ConfigType,
  format = DATE_FORMAT,
  tz = TIME_ZONE,
) => {
  const givenDate = dayjs.tz(date, tz);
  if (givenDate.isToday()) {
    return 'Today';
  }
  if (givenDate.isTomorrow()) {
    return 'Tomorrow';
  }

  return formatDate(givenDate, format);
};
