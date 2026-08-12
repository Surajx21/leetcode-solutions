function isValid(s: string): boolean {
  const paranthesespair = {
    "}": "{",
    "]": "[",
    ")": "(",
  };
  let stack: Array<string> = [];

  for (let index = 0; index < s.length; index++) {
    const element = s[index];

    if (element === "(" || element === "{" || element === "[") {
      stack.push(element);
    }
    if (element === ")" || element === "}" || element === "]") {
      let paran = paranthesespair[element];
      let lastElem = stack[stack.length - 1];

      if (paran === lastElem) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
}