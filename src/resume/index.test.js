import data from './index.js'
import { goals } from './index.js'

test('all modules are defined', () => {
  expect(Object.values(data).filter(x => x).length)
  .toBe(Object.values(data).length);
});

test('goals are in an array', () => {
  expect(Array.isArray(goals))
  .toBe(true);
});

test('there are some goals', () => {
  expect(goals.length)
  .toBeGreaterThanOrEqual(1);
});