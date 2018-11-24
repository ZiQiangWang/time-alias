import Alias from '../../src';
import en from '../../src/locale/en';

describe('Test time alias: en', () => {
  test('night', () => {
    expect(Alias(new Date(2018, 10, 1, 2), en)).toBe('night')
  })

  test('early morning', () => {
    expect(Alias(new Date(2018, 10, 1, 6), en)).toBe('early morning')
  })

  test('morning', () => {
    expect(Alias(new Date(2018, 10, 1, 8), en)).toBe('morning')
  })

  test('noon', () => {
    expect(Alias(new Date(2018, 10, 1, 12), en)).toBe('noon')
  })

  test('afternoon', () => {
    expect(Alias(new Date(2018, 10, 1, 13), en)).toBe('afternoon')
  })

  test('evening', () => {
    expect(Alias(new Date(2018, 10, 1, 18), en)).toBe('evening')
  })
})