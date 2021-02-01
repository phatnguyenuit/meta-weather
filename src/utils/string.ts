const exhaustedSplitter = /[\s_-]/;

const createTransform = (
  splitter: string | RegExp,
  separator: string,
  transformWord: (word: string) => string,
) => (text: string) => text.split(splitter).map(transformWord).join(separator);

export const toKebabCase = createTransform(exhaustedSplitter, '-', (w) =>
  w.toLowerCase(),
);
