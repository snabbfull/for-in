import orderByProps from '../index.js';

describe('orderByProps function', () => {
  test('сортировка с приоритетным порядком', () => {
    const obj = { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 };
    const order = ['name', 'level'];

    const result = orderByProps(obj, order);

    expect(result).toEqual([
      { key: 'name', value: 'мечник' },
      { key: 'level', value: 2 },
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 },
    ]);
  });

  test('если в order есть ключей, которых нет в объекте', () => {
    const obj = { attack: 50, defence: 20 };
    const order = ['name', 'attack'];

    const result = orderByProps(obj, order);

    expect(result).toEqual([
      { key: 'attack', value: 50 },
      { key: 'defence', value: 20 },
    ]);
  });

  test('если order пустой', () => {
    const obj = { b: 2, a: 1, c: 3 };

    const result = orderByProps(obj, []);

    expect(result).toEqual([
      { key: 'a', value: 1 },
      { key: 'b', value: 2 },
      { key: 'c', value: 3 },
    ]);
  });

  test('если объект пустой', () => {
    const obj = {};
    const order = ['a', 'b'];

    const result = orderByProps(obj, order);

    expect(result).toEqual([]);
  });

  test('сортировка с пересечением order и алфавитного порядка', () => {
    const obj = { z: 1, a: 2, m: 3 };
    const order = ['m'];

    const result = orderByProps(obj, order);

    expect(result).toEqual([
      { key: 'm', value: 3 },
      { key: 'a', value: 2 },
      { key: 'z', value: 1 },
    ]);
  });
});