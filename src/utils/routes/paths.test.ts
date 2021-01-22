import * as pathsUtils from './paths';

describe('paths utils', () => {
  test('should work with path function', () => {
    const testPath = pathsUtils.createPaths('test', {
      page1: {
        title: 'Page 1',
        path: (id: string | number) => `page1/${id}`,
      },
    });
    expect(testPath.page1(1).path).toEqual('/test/page1/1');
    expect(testPath.page1('str-id').path).toEqual('/test/page1/str-id');
  });
  test('should work with path string', () => {
    const testPath = pathsUtils.createPaths('test', {
      page1: {
        title: 'Page 1',
        path: 'page1',
      },
    });
    expect(testPath.page1().path).toEqual('/test/page1');
  });
  test('should work without provided path by convert keyName to kebab case', () => {
    const testPath = pathsUtils.createPaths('test', {
      page1: {
        title: 'Page 1',
      },
    });
    expect(testPath.page1().path).toEqual('/test/page-1');
  });
});
