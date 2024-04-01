export type MockEventCreateDataRequest = {
  body: {
    eventName: string;
    dataList: string[];
  };
};

export type EventCreateDataRequest = {
  eventName: string;
  dataList: string[];
};

export type CalendarPropsType = {
  selectedDates: string[];
  onDateClick: (day: number) => void;
};
