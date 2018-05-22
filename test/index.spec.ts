import { returnA, returnB } from '../src/index';

describe('App', () => {

  it('should return A', () => {
    expect(returnA()).toBe('A');
  });

  it('should return B', () => {
    expect(returnB()).toBe('B');
  });
});
