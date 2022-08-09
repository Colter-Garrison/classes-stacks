const { Stack } = require("./index.js");
describe("Stack Class", () => {
  it("#push should add a new item to the stack ", () => {
    const stack = new Stack(['duck', 'fox']);
    expect(stack.push('fox')).toEqual(['duck', 'fox', 'fox']);
    // expect(stack.peek()).toEqual(1);
  });
  // add more tests here...
  it('#pop should remove last item from array', () => {
    const stack = new Stack(['duck', 'fox']);
    expect(stack.pop()).toEqual(['duck']);
  });
});
