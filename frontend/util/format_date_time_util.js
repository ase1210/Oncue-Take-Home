export const formatDate = date => {
  let dateArr = date.split("-");
  return dateArr[1] + "/" + dateArr[2] + "/" + dateArr[0];
};

export const formatTime = t => {
  let time = t.slice(11, 16);
  let hour = parseInt(time.slice(0, 2));
  let min = parseInt(time.slice(3));
  let ampm = hour < 12 ? "am" : "pm";
  hour = hour > 12 ? hour - 12 : hour;
  let formatted = min ? `${hour}:${min}` : `${hour}`;
  return `${formatted}${ampm}`;
};
