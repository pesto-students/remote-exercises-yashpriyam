let NOW = 1516816290;
const SECONDS = 1000;
const MINUTES = SECONDS * 60;
const HOURS = MINUTES * 60;
const DAYS = HOURS * 24;
const WEEKS = DAYS * 7;
const MONTHS = DAYS * 30;
const YEARS = MONTHS * 12;

function timeWas(time, now) {
  if (now) {
    NOW = now;
  }
  const inputTime = NOW - time;
  if (inputTime < 60 * SECONDS) {
    return inputTime / SECONDS > 1 ? `${inputTime / SECONDS} seconds ago` : `just now`;
  }
  if (inputTime >= MINUTES && inputTime < HOURS) {
    return inputTime / MINUTES > 1 ? `${inputTime / MINUTES} minutes ago` : `${inputTime / MINUTES} minute ago`;
  }
  if (inputTime >= HOURS && inputTime < DAYS) {
    return inputTime / HOURS > 1 ? `${inputTime / HOURS} hours ago` : `${inputTime / HOURS} hour ago`;
  }
  if (inputTime >= DAYS && inputTime < WEEKS) {
    return inputTime / DAYS > 1 ? `${inputTime / DAYS} days ago` : `${inputTime / DAYS} day ago`;
  }
  if (inputTime >= WEEKS && inputTime < MONTHS) {
    return inputTime / WEEKS > 1 ? `${inputTime / WEEKS} weeks ago` : `${inputTime / WEEKS} week ago`;
  }
  if (inputTime >= MONTHS && inputTime < YEARS) {
    return inputTime / MONTHS > 1 ? `${inputTime / MONTHS} months ago` : `${inputTime / MONTHS} month ago`;
  }
  if (inputTime >= YEARS) {
    return inputTime / YEARS > 1 ? `${inputTime / YEARS} years ago` : `${inputTime / YEARS} year ago`;
  }
}

export { timeWas };
