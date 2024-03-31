import { useEffect, useState } from "react";
import { getDaysInMonth } from "date-fns";

const useCalendar = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [weekCalendarList, setWeekCalendarList] = useState<number[][]>([]);
  const daysInWeek = 7;
  const defaultTrashValue = 0;

  useEffect(() => {
    const totalMonthDays = getDaysInMonth(currentDate);
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const startingDayIndex = firstDayOfMonth.getDay();
    const prevMonthDays = Array.from({ length: startingDayIndex }).fill(defaultTrashValue);
    const currentMonthDays = Array.from({ length: totalMonthDays }, (_, index) => index + 1);
    const nextMonthDays = Array.from({
      length: daysInWeek - ((startingDayIndex + totalMonthDays) % daysInWeek),
    }).fill(defaultTrashValue);

    const calendarDays = [
      ...(prevMonthDays as number[]),
      ...(currentMonthDays as number[]),
      ...(nextMonthDays as number[]),
    ];
    const newWeekCalendarList = [];

    for (let i = 0; i < calendarDays.length; i += daysInWeek) {
      newWeekCalendarList.push(calendarDays.slice(i, i + daysInWeek));
    }

    setWeekCalendarList(newWeekCalendarList);
  }, [currentDate]);

  return { weekCalendarList, currentDate, setCurrentDate };
};

export default useCalendar;
