function solution(arr) {
  const positiveArr = arr.sort((a, b) => a - b).filter((v) => v > 0);

  if (!positiveArr.length) return 1;
  if (positiveArr[0] !== 1) return 1;

  for (let i = 1; i < positiveArr.length; i++) {
    if (positiveArr[i - 1] < positiveArr[i] && positiveArr[i - 1] + 1 !== positiveArr[i]) {
      return positiveArr[i - 1] + 1;
    }
  }

  return positiveArr[positiveArr.length - 1] + 1;
}
