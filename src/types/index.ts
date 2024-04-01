export type MockEventCreateDataRequest = {
  body: {
    eventName: string;
    dataList: string[];
  };
};

export type MockLoginDataRequest = {
  body: {
    userName: string;
    password: string;
  };
};

export type EventCreateDataRequest = {
  eventName: string;
  dataList: string[];
};

export type LoginDataRequest = {
  username: string;
  password: string;
};

export type CalendarPropsType = {
  selectedDates: string[];
  onDateClick: (day: number) => void;
};
