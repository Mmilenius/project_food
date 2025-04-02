const calculateCalories = require('../callc');

describe('calculateCalories function', () => {
  test('should calculate correctly for female', () => {
    const result = calculateCalories('female', 60, 160, 25, 1.2);
    expect(result).toBe(1666); //очікуване значення
  });

  test('should calculate correctly for male', () => {
    const result = calculateCalories('male', 75, 175, 30, 1.2);
    expect(result).toBe(2115); //очікуване значення
  });
});
