/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Days {
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
  SUNDAY,
}
function isWeekend(day: Days): boolean {
  return day === Days.SATURDAY || day === Days.SUNDAY;
}

if (isWeekend(Days.WEDNESDAY)) {
  console.log("Today is a day off");
} else {
  console.log("Today is a working day");
}
