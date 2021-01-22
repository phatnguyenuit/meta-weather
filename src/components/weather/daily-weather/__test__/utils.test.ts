import dayjs from 'dayjs';
import { DATE_FORMAT, TIME_ZONE } from 'constants/common';
import * as utils from '../utils';

const date = dayjs();
describe('formatDate', () => {
  test('should work', () => {
    expect(utils.formatDate(date)).toEqual(date.format(DATE_FORMAT));
  });
});

const today = dayjs.tz(dayjs(), TIME_ZONE);
describe('computeDisplayDate', () => {
  test('should return today', () => {
    const dateStr = today.format('YYYY-MM-DD');
    expect(utils.computeDisplayDate(dateStr)).toEqual('Today');
  });
  test('should return tomorrow', () => {
    const dateStr = today.add(1, 'day').format('YYYY-MM-DD');
    expect(utils.computeDisplayDate(dateStr)).toEqual('Tomorrow');
  });
  test('should return the formatted date', () => {
    const next2DaysDate = today.add(2, 'day');
    const dateStr = next2DaysDate.format('YYYY-MM-DD');
    expect(utils.computeDisplayDate(dateStr)).toEqual(
      next2DaysDate.format(DATE_FORMAT),
    );
  });
});
