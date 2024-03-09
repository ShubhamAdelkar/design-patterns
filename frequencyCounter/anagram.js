function validAnagram(str1, str2) {
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  if (str1.length !== str2.length) {
    return false;
  }

  for (let char of str1) {
    frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1;
  }
  console.log(frequencyCounter1);

  for (let char of str2) {
    frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1;
  }
  console.log(frequencyCounter2);

  for (let key in frequencyCounter1) {
    if (
      !(key in frequencyCounter2) ||
      frequencyCounter1[key] !== frequencyCounter2[key]
    ) {
      return false;
    }
  }

  return true;
}

const res = validAnagram("saisa", "iasas");
console.log(res);