const {sum, isEven, randomInt} = require('./testFunctions');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('сложение дробных чисел', () => {
  expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
});

test('1 должно быть нечетным', ()=>{
  expect(isEven(1)).toBeFalsy()
})

test('2 должно быть четным', ()=>{
  expect(isEven(2)).toBeTruthy()
})

test('тест на undefined', ()=>{
  const obj = {}
  expect(obj.something).toBeUndefined()
})

test('тест на наличия поля', ()=>{
  const obj = {value: 1}
  expect(obj.value).toBeDefined()
})

test('randomInt тест с одним аргументом рандомное число всегда меньше максимума', ()=>{
  for(let i = 0; i < 100; i++){
    expect(randomInt(10)).toBeLessThan(10)
  }
})

test('randomInt тест с одним аргументом рандомное число всегда больше или равно нулю', ()=>{
  for(let i = 0; i < 100; i++){
    expect(randomInt(10)).toBeGreaterThanOrEqual(0)
  }
})

test('randomInt тест с двумя аргументами должны бытьпринаджлежать [a, b)', ()=>{
  for(let i = 0; i < 100; i++){
    const a = randomInt(100)
    const b = a +  randomInt(100)
    const value = randomInt(a, b) 
    expect(value).toBeGreaterThanOrEqual(a)
    if(a === b){
      expect(value).toBeLessThanOrEqual(b)
    }else{
      expect(value).toBeLessThan(b)
    }
    
  }
})