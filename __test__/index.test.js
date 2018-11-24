import Alias from '../src';

describe('Test time alias', () => {

  test('Date', () => {
    expect(Alias(new Date(2018, 10, 1, 6))).toBe('早晨')
  })
  test('Number', () => {
    expect(Alias(1541023200000)).toBe('早晨')
  })

  test('String', () => {
    expect(Alias.bind(null, 'abc')).toThrow()
  })
})