import Alias from '../../src';

describe('Test time alias: zh_CN', () => {
  test('night', () => {
    expect(Alias(new Date(2018, 10, 1, 2))).toBe('深夜')
  })

  test('early morning', () => {
    expect(Alias(new Date(2018, 10, 1, 6))).toBe('早晨')
  })

  test('morning', () => {
    expect(Alias(new Date(2018, 10, 1, 8))).toBe('上午')
  })

  test('morning', () => {
    expect(Alias(new Date(2018, 10, 1, 12))).toBe('中午')
  })

  test('morning', () => {
    expect(Alias(new Date(2018, 10, 1, 13))).toBe('下午')
  })

  test('morning', () => {
    expect(Alias(new Date(2018, 10, 1, 18))).toBe('晚上')
  })
})