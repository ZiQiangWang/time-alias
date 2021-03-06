import zh_CN from './locale/zh_CN';

/**
 * @param {Date} datetime 当前时间
 * @param {String} locale 
 */
export default function alias(datetime, locale) {
  if (!(datetime instanceof Date)) {
    throw new Error('Date type is expected');
  }

  locale = locale || zh_CN;

  const hour = datetime.getHours();
  const name = timeToName(hour);
  return locale[name];
}

function timeToName(hour) {
  // early morning
  if (hour >= 6 && hour < 8) {
    return 'em';
  // morning
  } else if (hour >= 8 && hour <= 11) {
    return 'mo';
  // noon
  } else if (hour === 12) {
    return 'no';
    // afternoon
  } else if (hour > 12 && hour <= 17) {
    return 'af';
    // evening
  } else if (hour >= 18 && hour < 24) {
    return 'ev';
    // night
  } else {
    return 'ni';
  }
}