import dayjs from 'dayjs';
import { DATE_FORMAT, TIME_ZONE } from 'constants/common';
import * as utils from '../utils';

dayjs.tz.setDefault(TIME_ZONE);

const today = dayjs.tz(dayjs(), TIME_ZONE);
describe('formatDate', () => {
  test('should work', () => {
    expect(utils.formatDate(today)).toEqual(today.format(DATE_FORMAT));
  });
});

describe('computeDisplayDate', () => {
  test('should return today', () => {
    expect(utils.computeDisplayDate(today)).toEqual('Today');
  });
  test('should return tomorrow', () => {
    const tomorrow = today.add(1, 'day');
    expect(utils.computeDisplayDate(tomorrow)).toEqual('Tomorrow');
  });
  test('should return the formatted date', () => {
    const next2DaysDate = today.add(2, 'day');
    expect(utils.computeDisplayDate(next2DaysDate)).toEqual(
      next2DaysDate.format(DATE_FORMAT),
    );
  });
});
