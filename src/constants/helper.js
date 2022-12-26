function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function makeFirstLetter(string) {
  let firstLetter = string[0].toUpperCase();
  return (string = firstLetter + string.slice(1));
}
function tableRowsBackgroundColor(index) {
  if (index % 2) {
    return "#bcc3c4";
  }
}

export { getRandomHexColor, makeFirstLetter, tableRowsBackgroundColor };
