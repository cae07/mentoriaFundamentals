const {
  validateName,
  validateIsNumber,
  validateExistFortune
} = require('./helpers');
const array = require('./mocks');

describe ("/validateName", () => {
  it('Return true with valid name', () => {
    const response = validateName('Fabio');

    expect(response).toBeDefined();
    expect(response).toBeTruthy();
  });

  it('Should throw error with invalid name', () => {
    try {
      validateName('Fab1o');
      
    } catch (error) {
      expect(error).toBeDefined();
      expect(error).toBeInstanceOf(Error);
      expect(error).toEqual(new Error("Por favor digite um nome válido."));
    }
  })

  it('Should throw error with typeof name = number', () => {
    try {
      validateName(15);
      
    } catch (error) {
      expect(error).toBeDefined();
      expect(error).toBeInstanceOf(Error);
      expect(error).toEqual(new Error("Por favor digite um nome válido."));
    }
  })
});

// describe ("/validateIsNumber", () => {
  
// });

describe ("/validateExistFortune", () => {
  it('Should return true', () => {
    expect(validateExistFortune(8)).toBeTruthy();
    expect(validateExistFortune(1)).toBeTruthy();
    expect(validateExistFortune(6)).toBeTruthy();
  })

  it('Should throw error', () => {
    try {
      validateExistFortune(11);
    } catch (error) {
      expect(error).toBeDefined();
      expect(error).toBeInstanceOf(Error);
      expect(error).toEqual(new Error(`Por favor digite um numero entre 1 e ${array.length}`))
    }
  })
});
