import { subMonths } from "date-fns";
import { useCalendar } from "@/hooks";
import { CalendarPropsType } from "@/types";

const Calendar = ({ selectedDates, onDateClick }: CalendarPropsType) => {
  const { weekCalendarList, currentDate, setCurrentDate } = useCalendar();

  const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];

  const handleNextMonth = () => {
    const nextMonthDate = subMonths(currentDate, -1);
    setCurrentDate(nextMonthDate);
  };

  const handlePreviousMonth = () => {
    const previousMonthDate = subMonths(currentDate, 1);
    setCurrentDate(previousMonthDate);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex">
        <button className="mx-3" onClick={handlePreviousMonth}>
          &lt;
        </button>
        <div className="mx-3">{`${currentDate.getMonth() + 1}월`}</div>
        <button className="mx-3" onClick={handleNextMonth}>
          &gt;
        </button>
      </div>
      <div className="flex">
        {daysOfWeek.map(day => (
          <div key={day} className="w-11 p-3 text-center">
            {day}
          </div>
        ))}
      </div>

      <table className="h-64">
        <tbody>
          {weekCalendarList.map((week, weekIndex) => (
            <tr key={weekIndex}>
              {week.map((day, dayIndex) => (
                <td key={dayIndex}>
                  {day !== 0 && (
                    <button
                      onClick={() => onDateClick(day)}
                      className={`w-10 w-full rounded p-3 text-center 
                                    ${
                                      selectedDates.includes(
                                        `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, "0")}-${day.toString().padStart(2, "0")}`
                                      )
                                        ? "bg-green-700 text-white"
                                        : "bg-green-200 text-black"
                                    }`}
                    >
                      {day.toString().padStart(2, "0")}
                    </button>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
