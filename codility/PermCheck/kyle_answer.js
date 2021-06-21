function solution(arr) {
  arr.sort((a, b) => a - b);

  if (arr[0] !== 1) return 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] + 1 !== arr[i]) return 0;
  }

  return 1;
}
