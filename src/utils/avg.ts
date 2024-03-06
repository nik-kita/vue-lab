export function avg(arr: number[], round_type: 'ceil' | 'floor' = 'ceil') {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }

  return Math[round_type](sum / arr.length)
}
