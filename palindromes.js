let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let palindromes = arr.filter(num => {
    let str = num.toString();
    return str === str.split('').reverse().join('');
  });
  console.log(palindromes);