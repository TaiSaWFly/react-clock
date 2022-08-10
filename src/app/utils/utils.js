export function parseDay(numberDay) {
  const daysArr = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  let parseDay = daysArr.find((day, i) => (i === numberDay ? day : false));
  return parseDay;
}

export function parseStr(number) {
  let parseStr = `${number}`;
  if (number <= 9) {
    parseStr = `0${number}`;
  }
  return parseStr;
}

export function randomColor() {
  const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  let color = "#";
  for (let i = 0; i <= 5; i++) {
    color += hex[Math.floor(Math.random() * hex.length)];
  }
  return color;
}
