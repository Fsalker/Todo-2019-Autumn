const milisecondsInDay = 1000 * 60 * 60 * 24;

const getTodayTimestamp = () => parseInt(new Date().getTime() / milisecondsInDay) * milisecondsInDay;

module.exports = getTodayTimestamp;
