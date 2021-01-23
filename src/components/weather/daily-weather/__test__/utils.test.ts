/* eslint-disable no-console */
import dayjs from 'dayjs';
import { DATE_FORMAT, TIME_ZONE } from 'constants/common';
import * as utils from '../utils';

dayjs.tz.setDefault(TIME_ZONE);

describe('formatDate', () => {
  test('should work', () => {
    const today = dayjs.tz(dayjs(), TIME_ZONE);
    expect(utils.formatDate(today)).toEqual(today.format(DATE_FORMAT));
  });
});

describe('computeDisplayDate', () => {
  test('should return today', () => {
    const today = dayjs();
    console.log('today', today.format(DATE_FORMAT));
    expect(utils.computeDisplayDate(today)).toEqual('Today');
  });
  test('should return tomorrow', () => {
    const tomorrow = dayjs().add(1, 'day');
    console.log('tomorrow', tomorrow.format(DATE_FORMAT));
    expect(utils.computeDisplayDate(tomorrow)).toEqual('Tomorrow');
  });
  test('should return the formatted date', () => {
    const next2DaysDate = dayjs().add(2, 'day');
    console.log('next2DaysDate', next2DaysDate.format(DATE_FORMAT));
    expect(utils.computeDisplayDate(next2DaysDate)).toEqual(
      next2DaysDate.format(DATE_FORMAT),
    );
  });
});
