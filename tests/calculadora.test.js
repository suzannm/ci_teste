const { somar, subtrair } = require('../src/calculadora');

describe('Funções da Calculadora', () => {
  test('Deve somar dois números corretamente', () => {
    expect(somar(2, 3)).toBe(5);
  });

  test('Deve subtrair dois números corretamente', () => {
    expect(subtrair(5, 3)).toBe(2);
  });

  test('Subtrair número maior de menor deve dar negativo', () => {
    expect(subtrair(3, 5)).toBe(-2);
  });
});
