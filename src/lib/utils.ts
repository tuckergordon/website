type DateStyle = Intl.DateTimeFormatOptions['dateStyle'];

export function formatDate(
  date: Date | string,
  dateStyle: DateStyle = 'medium',
  locales = 'en',
  timeZone = 'America/New_York',
) {
  if (typeof date === 'string') {
    const [year, month, day] = date.split('-').map(Number);
    date = new Date(year, month - 1, day, 0, 0, 0);
  }

  if (!(date instanceof Date) || isNaN(date.getTime())) {
    throw new Error('Invalid date');
  }

  const formatter = new Intl.DateTimeFormat(locales, { dateStyle, timeZone });
  return formatter.format(date);
}
