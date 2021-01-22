import { EventListener } from '../eventListener';

describe('EventListener', () => {
  test('should add listener to raise event later', () => {
    const eventListener = new EventListener<string[]>();

    const mock = jest.fn((...params: string[]) => params);
    eventListener.addListener(mock);

    const param = 'test param';
    eventListener.raiseEvent(param);

    expect(mock).toBeCalled();
    expect(mock).toBeCalledTimes(1);
    expect(mock).toHaveBeenCalledWith(param);
  });

  test('should remove listener', () => {
    const eventListener = new EventListener<string[]>();

    const mock = jest.fn((...params: string[]) => params);
    eventListener.addListener(mock);
    eventListener.removeListener(mock);

    const param = 'test param';
    eventListener.raiseEvent(param);

    expect(mock).not.toBeCalled();
  });

  test('should not remove listener if it does not exist in', () => {
    const eventListener = new EventListener<string[]>();

    const mock = jest.fn((...params: string[]) => params);
    eventListener.removeListener(mock);

    expect(mock).not.toBeCalled();
  });
});
