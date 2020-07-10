const dayStart = "07:30";
const dayEnd = "17:45";

function scheduleMeeting(startTime,durationMinutes) {
    const [dayStartHour,dayStartMinute] = dayStart.split(":");
    const [meetingStartHour,meetingStartMinute] = startTime.split(":");
    const [dayEndHour,dayEndMinute] = dayEnd.split(":");
    const dayStartDate = new Date(Date.UTC(2000,0,1,dayStartHour,dayStartMinute,0));
    const dayEndDate = new Date(Date.UTC(2000,0,1,dayEndHour,dayEndMinute,0));
    const meetingStartDate = new Date(Date.UTC(2000,0,1,meetingStartHour,meetingStartMinute,0));
    const meetingEndDate = new Date(Date.UTC(2000,0,1,meetingStartHour,meetingStartMinute,0));
    meetingEndDate.setMinutes(meetingEndDate.getMinutes() + Number(durationMinutes));
    return meetingStartDate.getTime() >= dayStartDate.getTime() && meetingEndDate.getTime() <= dayEndDate.getTime() ? true : false;
}


console.log(scheduleMeeting("7:00",15));     // false
console.log(scheduleMeeting("07:15",30));    // false
console.log(scheduleMeeting("7:30",30));     // true
console.log(scheduleMeeting("11:30",60));    // true
console.log(scheduleMeeting("17:00",45));    // true
console.log(scheduleMeeting("17:30",30));    // false
console.log(scheduleMeeting("18:00",15));    // false