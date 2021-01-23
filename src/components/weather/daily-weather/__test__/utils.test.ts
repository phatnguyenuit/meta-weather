import dayjs from 'dayjs';
import { DATE_FORMAT, TIME_ZONE } from 'constants/common';
import * as utils from '../utils';

describe('formatDate', () => {
  test('should work', () => {
    const today = dayjs.tz(dayjs(), TIME_ZONE);
    expect(utils.formatDate(today)).toEqual(today.format(DATE_FORMAT));
  });
});

describe('computeDisplayDate', () => {
  test('should return today', () => {
    const today = dayjs.tz(dayjs(), TIME_ZONE);
    expect(utils.computeDisplayDate(today)).toEqual('Today');
  });
  test('should return tomorrow', () => {
    const tomorrow = dayjs.tz(dayjs(), TIME_ZONE).add(1, 'day');
    expect(utils.computeDisplayDate(tomorrow)).toEqual('Tomorrow');
  });
  test('should return the formatted date', () => {
    const next2DaysDate = dayjs.tz(dayjs(), TIME_ZONE).add(2, 'day');
    expect(utils.computeDisplayDate(next2DaysDate)).toEqual(
      next2DaysDate.format(DATE_FORMAT),
    );
  });
});
