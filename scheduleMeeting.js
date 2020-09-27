const dayStart = "07:30";
const dayEnd = "17:45";

function scheduleMeeting(startTime, durationMinutes) {
  const CUR_DATE = "2020-09-27";

  const start = new Date(CUR_DATE + " " + dayStart);
  const end = new Date(CUR_DATE + " " + dayEnd);
  const scheduleStart = new Date(CUR_DATE + " " + startTime);
  if (scheduleStart - start < 0) return false;

  const finishMinutes = scheduleStart.getMinutes() + durationMinutes;

  if (finishMinutes < 60) {
    const scheduleFinish = scheduleStart.setMinutes(finishMinutes);
    return end - scheduleFinish >= 0;
  } else {
    const finishHour =
      scheduleStart.getHours() + Math.floor(finishMinutes / 60);
    const finishMinute = finishMinutes % 60;
    if (finishHour >= 24) return false;

    let scheduleFinish = scheduleStart.setHours(finishHour);
    scheduleFinish = scheduleStart.setMinutes(finishMinute);

    return end - scheduleFinish >= 0;
  }

  return true;
}
console.log(
  scheduleMeeting("7:00", 15), // false
  scheduleMeeting("07:15", 30), // false
  scheduleMeeting("7:30", 30), // true
  scheduleMeeting("22:30", 360), // false
  scheduleMeeting("17:00", 45), // true
  scheduleMeeting("17:30", 30), // false
  scheduleMeeting("18:00", 15) // false
);
