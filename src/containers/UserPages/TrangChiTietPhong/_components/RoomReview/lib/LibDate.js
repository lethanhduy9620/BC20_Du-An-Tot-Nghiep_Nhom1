// * Function convert Time String from Server

export const getMonth_lib = (timeString) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return monthNames[new Date(timeString).getMonth()];
};

export const getFullYear_lib = (timeString) => {
  return new Date(timeString).getFullYear();
};
