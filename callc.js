function calculateCalories(sex, weight, height, age, ratio) {
  let result = 0;

  if (sex === 'female') {
    result = Math.round((447.6 + 9.2 * weight + 3.1 * height - 4.3 * age) * ratio);
  } else {
    result = Math.round((88.36 + 13.4 * weight + 4.8 * height - 5.7 * age) * ratio);
  }

  return result;
}

module.exports = calculateCalories;
