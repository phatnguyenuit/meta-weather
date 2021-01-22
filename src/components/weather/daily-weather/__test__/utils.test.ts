import dayjs from 'dayjs';
import { DATE_FORMAT } from 'constants/common';
import * as utils from '../utils';

const date = dayjs();
describe('formatDate', () => {
  test('should work', () => {
    expect(utils.formatDate(date)).toEqual(date.format(DATE_FORMAT));
  });
});

describe('computeDisplayDate', () => {
  test('should return today', () => {
    const today = dayjs();
    const dateStr = today.format('YYYY-MM-DD');
    expect(utils.computeDisplayDate(dateStr)).toEqual('Today');
  });
  test('should return tomorrow', () => {
    const today = dayjs();
    const dateStr = today.add(1, 'day').format('YYYY-MM-DD');
    expect(utils.computeDisplayDate(dateStr)).toEqual('Tomorrow');
  });
  test('should return the formatted date', () => {
    const today = dayjs();
    const next2DaysDate = today.add(2, 'day');
    const dateStr = next2DaysDate.format('YYYY-MM-DD');
    expect(utils.computeDisplayDate(dateStr)).toEqual(
      next2DaysDate.format(DATE_FORMAT),
    );
  });
});
