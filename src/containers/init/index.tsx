import { ChangeEvent, useState } from "react";
import { Calendar, Logo } from "@/components";
import { useCalendar, usePostEventCreate } from "@/hooks";

const InitContainer = () => {
  const [eventName, setEventName] = useState<string>("");
  const [selectedDates, setSelectedDates] = useState<string[]>([]);
  const { mutate: createEvent } = usePostEventCreate();
  const { currentDate } = useCalendar();

  const handleEventNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEventName(event.target.value);
  };

  const handleCreateEvent = () => {
    const eventData = {
      eventName: eventName,
      dataList: selectedDates,
    };
    createEvent(eventData, {
      onSuccess(data) {
        console.log("이벤트 요청 성공");
        console.log("Data", data);
      },
      onError(error) {
        console.log("에러", error);
      },
    });
  };

  const handleDateClick = (day: number) => {
    const year = currentDate.getFullYear();
    const month = `${currentDate.getMonth() + 1}`.padStart(2, "0");
    const formattedDay = `${day}`.padStart(2, "0");
    const formattedDate = `${year}-${month}-${formattedDay}`;
    if (selectedDates.includes(formattedDate))
      setSelectedDates(selectedDates.filter(date => date !== formattedDate));
    else setSelectedDates([...selectedDates, formattedDate]);
  };

  return (
    <>
      <Logo />
      <div className="flex flex justify-center">
        <input
          className="w-80 rounded-lg border border-gray-300 p-2"
          placeholder="잔디명을 입력하세요"
          value={eventName}
          onChange={handleEventNameChange}
        />
      </div>
      <div className="mt-5">
        <Calendar selectedDates={selectedDates} onDateClick={handleDateClick} />
        <div className="mt-5 flex items-center justify-center">
          <button
            className="h-8 w-72 rounded-lg bg-green-800 text-white"
            onClick={handleCreateEvent}
          >
            잔디 만들기
          </button>
        </div>
      </div>
    </>
  );
};

export default InitContainer;
