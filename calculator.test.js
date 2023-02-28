const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");


describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two large positive numbers', () => { 
    expected = 133000 +  456000;
    actual = sum(133000, 456000);
    expect(actual).toBe(expected);
  });

  test('can add two negative numbers', () => {
    expected = -23 + -15;
    actual = sum(-23, -15);
    expect(actual).toBe(expected);

  });

  test('can add zero', () => {
    expected = 15 + 0;
    actual = sum(15, 0);
    expect(actual).toBe(expected);
  });

});

describe('subtract', () => {
  test('can subtract two small positive numbers', () => {
    expected = 15-18;
    actual = subtract(15, 18);
    expect(actual).toBe(expected);
  });

  test('can subtrcat two decimals', () => { 
    expected = 0.68 -  0.97;
    actual = subtract(0.68, 0.97);
    expect(actual).toBe(expected);
  });

});

describe('multiply', () => {
  test('can multiply two small positive numbers', () => {
    expected = 45*76;
    actual = multiply(45, 76);
    expect(actual).toBe(expected);
  });

  test('can multiply large negative numbers', () => { 
    expected = -133000 *  -456000;
    actual = multiply(133000, 456000);
    expect(actual).toBe(expected);
  });


});

describe('divide', () => {
  test('can divide two small positive numbers', () => {
    expected = 78/97;
    actual = divide(78, 97);
    expect(actual).toBe(expected);
  });

  test('can divide by 0', () => { 
    expected = 133000 /  0;
    actual = divide(133000, 0);
    expect(actual).toBe(expected);
  });


});

describe('modulus', () => {
  test('can modulus two small positive numbers', () => {
    expected = 7%9;
    actual = modulus(7, 9);
    expect(actual).toBe(expected);
  });

  test('can modulus two negative numbers', () => { 
    expected = 0.133000 %  0.456000;
    actual = modulus(0.133000, 0.456000);
    expect(actual).toBe(expected);
  });


});

describe('even', () => {
  test('can identfy an even number', () => {
    actual = even(16);
    expect(actual).toBeTruthy();
  });

  test('can identfy a number is not even', () => { 
    actual = even(10765);
    expect(actual).toBeFalsy();
  });


});

describe('odd', () => {
  test('can identfy an odd number', () => {
    actual = odd(17);
    expect(actual).toBeTruthy();
  });

  test('can identfy a number is not odd', () => { 
    actual = odd(10768);
    expect(actual).toBeFalsy();
  });


});
