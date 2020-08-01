import moment from 'moment';

export function getCalendarDates(year, month) {
  const startDay = moment().clone().year(year).month(month).startOf('month').startOf('week');
  const endDay = moment().clone().year(year).month(month).endOf('month').endOf('week');

  const calendar = [];
  const index = startDay.clone();
  while (index.isBefore(endDay, 'day')) {
    calendar.push(
      new Array(7).fill(0).map(function (n, i) {
        return { date: index.add(1, 'day').format('L') };
      })
    );
  }

  return calendar;
}
