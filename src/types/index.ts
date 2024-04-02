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
  userName: string;
  password: string;
};

export type TimeData = {
  date: string;
  time: number[];
};

export type UserData = {
  userName: string;
  timeList: TimeData[];
};

export type memberAllData = {
  loginName: string;
  dateList: string[];
  userList: UserData[];
};

export type CalendarPropsType = {
  selectedDates: string[];
  onDateClick: (day: number) => void;
};
