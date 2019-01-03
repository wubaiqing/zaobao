import readFileList from '../scripts/build'

test('is directory empty', () => {
  expect(readFileList('2019', '13')).toEqual([])
});

test('not empty', () => {
  expect(readFileList('2019', '01').length).not.toBe(0)
});
