function edit(element, match, replacer) {
  let text = element.textContent;
//   let pattern = new RegExp(match, 'g');
//   const result = text.replace(pattern, replacer);
const result = text.split(match).join(replacer)
  element.textContent = result;
}

