import { NumberAcountPipe } from './number-acount.pipe';

describe('NumberAcountPipe', () => {
  it('create an instance', () => {
    const pipe = new NumberAcountPipe();
    expect(pipe).toBeTruthy();
  });
});
