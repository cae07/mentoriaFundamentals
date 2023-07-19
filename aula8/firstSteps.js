const throwError = new Error('Apenas numbers são validos!');

const sum = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") {
    throw throwError;
  }
  return a + b;
};

describe('Test method sum', () => {
  it('Expect 10 + 12 to be 22', () => {
    const response = sum(10, 12);

    expect(response).toBe(22);
    expect(response).toBeGreaterThan(20);
    expect(response).not.toBe(20);
  });

  it('Expect 10 + "11" to throw error', () => {
    try {
      sum(10, '11');
    } catch (error) {
      expect(error).toBeDefined();
      expect(error).toBeInstanceOf(Error);
      expect(error).toEqual(throwError);
    }
  })

  it('Expect 10 + "batata" to throw error', () => {
    try {
      sum(10, 'batata');
    } catch (error) {
      expect(error).toBeDefined();
      expect(error).toBeInstanceOf(Error);
      expect(error).toEqual(throwError);
    }
  })
});

///////////////////

const fruits = ['banana', 'maçã'];

const addItem = (array, newItem) => {
  array.push(newItem);

  return array;
};

describe("Test method addItem", () => {
  it("Should work", () => {
    const newItem = 'morango';
    const response = addItem(fruits, newItem);

    expect(response).toContain(newItem);
    fruits.pop();
  });

  it("Verify Length", () => {
    const newItem = 'morango';
    const response = addItem(fruits, newItem);

    expect(response.length).toBe(3);
    fruits.pop();
  });
});

////////////////////////////////

const createUser = (name, age, state) => {
  if (typeof name !== 'string') {
    throw new Error("É necessário um nome válido.");
  }
  return { name, age, state }
}


describe('Test createUser method', () => {
  it('Validate create a new user correctly', () => {
    const response = createUser('Fabio', 40, 'SP');

    expect(response).toHaveProperty('name', 'Fabio');
    expect(response).toHaveProperty('age', 40);
    expect(response).toHaveProperty('state', 'SP');
  })

  it('Expect throw error when name !== string', () => {
    try {
      createUser(40, 40, 'SP');
    } catch (error) {
      expect(error).toBeDefined();
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toMatch(/É necessário um nome válido./);
    }
  });

  it('Test regex', () => {
    expect('Fabio').toMatch(/[aA-zZ]+/);
  })

  it('Expect throw error when name !== string', () => {
    try {
      createUser(40, 40, 'SP');
    } catch (error) {
      expect(error).toBeDefined();
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe("É necessário um nome válido.");
      expect(4 + 5).toBe(9);
      expect('batata').toEqual('batata');
    }
  });
})
