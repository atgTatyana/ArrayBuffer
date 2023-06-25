import ArrayBufferConverter from '../ArrayBufferConverter';

test('testing class ArrayBufferConverter', () => {
  const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  const converter = new ArrayBufferConverter(data);
  converter.load();
  const result = converter.toString();
  expect(result).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
