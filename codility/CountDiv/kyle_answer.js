function solution(a, b, k) {
  let start = a;
  let startPlus = 0;

  for (let i = a; i <= b; i++) {
    if (i % k === 0) {
      start = i;
      startPlus = 1;
      break;
    }
  }

  return Math.floor((b - start) / k) + startPlus;
}
