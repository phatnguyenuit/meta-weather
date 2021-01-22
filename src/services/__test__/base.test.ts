import { BaseResponse, ServiceErrorState } from 'types/common';
import BaseService, { BaseRequestConfig, TransformData } from '../base';
import toastService from '../toast';

class TestService extends BaseService {
  test = async <TResponseData, TResultData = TResponseData>(
    config: BaseRequestConfig,
    transformData?: TransformData<TResponseData, TResultData>,
  ): Promise<BaseResponse<TResultData>> => {
    return this.requestData<TResponseData, TResultData>(config, transformData);
  };
}

interface TestResponseData {
  value: number;
}
interface TestResultData extends TestResponseData {
  isOdd: boolean;
}

const mockAxiosRequest = jest.fn();

jest.mock('axios', () => {
  const actual = jest.requireActual('axios');

  return {
    ...actual,
    create: () => ({
      request: () => mockAxiosRequest(),
    }),
  };
});

const notifySpy = jest.spyOn(toastService, 'notify');

beforeEach(() => {
  jest.clearAllMocks();
});

const sampleResponseData: TestResponseData = {
  value: 100,
};

const service = new TestService();
describe('BaseService', () => {
  test('should return the success response', async () => {
    mockAxiosRequest.mockResolvedValue({
      status: 200,
      data: sampleResponseData,
    });
    const response = await service.test({
      url: '/test',
      method: 'GET',
    });

    expect(response.kind).toBe('success');
    expect(response.data).toHaveProperty('value', sampleResponseData.value);
  });

  test('should return the cached success response', async () => {
    mockAxiosRequest.mockResolvedValue({
      status: 200,
      data: sampleResponseData,
    });
    const cacheKey = 'cacheKey';
    const response = await service.test({
      url: '/test',
      method: 'GET',
      cacheKey,
    });

    expect(response.kind).toBe('success');
    expect(response.data).toHaveProperty('value', sampleResponseData.value);
    expect(mockAxiosRequest).toBeCalled();
    expect(mockAxiosRequest).toBeCalledTimes(1);

    const response2 = await service.test({
      url: '/test',
      method: 'GET',
      cacheKey,
    });

    expect(response2.kind).toBe('success');
    expect(response2.data).toHaveProperty('value', sampleResponseData.value);
    // Still 1 time called `mockAxiosRequest`
    expect(mockAxiosRequest).toBeCalledTimes(1);
  });

  test('should return the success response after transformed using given transform function', async () => {
    mockAxiosRequest.mockResolvedValue({
      status: 200,
      data: sampleResponseData,
    });
    const transformer = ({ value }: TestResponseData): TestResultData => ({
      value,
      isOdd: value % 2 !== 0,
    });
    const response = await service.test(
      {
        url: '/test',
        method: 'GET',
      },
      transformer,
    );

    expect(response.kind).toBe('success');
    expect(response.data).toHaveProperty('value', sampleResponseData.value);
    expect(response.data).toHaveProperty(
      'isOdd',
      transformer({ value: sampleResponseData.value }).isOdd,
    );
  });

  test('should notify on success request', async () => {
    mockAxiosRequest.mockResolvedValue({
      status: 200,
      data: sampleResponseData,
    });
    const response = await service.test({
      url: '/test',
      method: 'GET',
      shouldNotifySuccess: true,
    });

    expect(response.kind).toBe('success');
    expect(response.data).toHaveProperty('value', sampleResponseData.value);
    expect(notifySpy).toHaveBeenCalledTimes(1);
    expect(notifySpy).toHaveBeenCalledWith('Success!', 'success');
  });

  test('should return the failed response in case server error', async () => {
    // make internal error happen
    mockAxiosRequest.mockResolvedValue({
      status: 500,
    });
    const response = await service.test({
      url: '/test',
      method: 'GET',
    });

    expect(response.kind).toBe('failed');
    expect(response.data).toBe(undefined);
  });

  test('should return the failed response', async () => {
    // make internal error happen
    mockAxiosRequest.mockResolvedValue({});
    const response = await service.test({
      url: '/test',
      method: 'GET',
    });

    expect(response.kind).toBe('failed');
  });

  test('should notify when the failed response returned', async () => {
    // make internal error happen
    mockAxiosRequest.mockResolvedValue({});
    const response = await service.test({
      url: '/test',
      method: 'GET',
    });

    expect(notifySpy).toHaveBeenCalledTimes(1);
    expect(notifySpy).toHaveBeenCalledWith(
      (response.data as ServiceErrorState).message,
      'error',
    );
  });

  test('should not notify when the failed response returned', async () => {
    // make internal error happen
    mockAxiosRequest.mockResolvedValue({});
    await service.test({
      url: '/test',
      method: 'GET',
      shouldNotifyError: false,
    });

    expect(notifySpy).not.toHaveBeenCalled();
  });
});
