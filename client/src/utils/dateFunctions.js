// ?
export const getMonday = (date, n = 0) => {
  const d = new Date(date);
  const day = d.getDay();
  const diff = d.getDate() - day + (day === 0 ? -6 : 1) + n;
  return new Date(d.setDate(diff)).getTime();
};

// ?
export const ordinal = (d) => {
  if (d > 3 && d < 21) return `${d}th`;
  switch (d % 10) {
    case 1:
      return `${d}st`;
    case 2:
      return `${d}nd`;
    case 3:
      return `${d}rd`;
    default:
      return `${d}th`;
  }
};

// ?
export const formatDateString = (date) => {
  const d = new Date(date);
  const dy = d.toString().substr(0, 3);
  const dt = ordinal(d.getDate());
  const month = d.toString().substr(4, 3);
  return `${dy} ${dt} ${month}`;
};

// ? convert ISO or UTC date to unix
export const dateToUnix = (d) => {
  const date = new Date(d);
  const unix = date.getTime();
  return unix;
};

// ? current clock time string
export const clockTime = () => {
  const date = new Date().toString();
  return date.substr(16, 5);
};

// ? time of day
export const greeting = (name) => {
  const today = new Date();
  const curHr = today.getHours();

  if (curHr < 12) {
    return `good morning ${name}`;
  } else if (curHr < 18) {
    return `good afternoon ${name}`;
  } else {
    return `good evening ${name}`;
  }
};
