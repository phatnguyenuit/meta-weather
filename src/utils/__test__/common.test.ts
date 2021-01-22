import { SuccessResponse, FailResponse } from 'types/common';
import * as commonUtils from '../common';

describe('common', () => {
  describe('isSuccessResponse', () => {
    test('should work', () => {
      const response: SuccessResponse<string> = {
        kind: 'success',
        data: 'data',
      };

      expect(commonUtils.isSuccessResponse(response)).toBe(true);
    });
  });
  describe('isFailedResponse', () => {
    test('should work', () => {
      const response: FailResponse = {
        kind: 'failed',
        data: {
          code: 100,
          message: 'error',
        },
      };

      expect(commonUtils.isFailedResponse(response)).toBe(true);
    });
  });
});
