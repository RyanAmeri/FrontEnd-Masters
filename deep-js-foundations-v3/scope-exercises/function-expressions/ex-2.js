const printRecords = (recordIds) => {
  const students = recordIds.map((id) => {
    return studentRecords.find((student) => student.id === id);
  });
  students.sort((a, b) => (a.name < b.name ? -1 : 1));
  students.forEach((student) =>
    console.log(
      `${student.name} (${student.id}) ${student.paid ? "Paid" : "Not Paid"}`
    )
  );
};

const paidStudentsToEnroll = () => {
  let newEnroll = [...currentEnrollment];
  studentRecords.forEach((student) => {
    if (!currentEnrollment.includes(student.id) && student.paid) {
      newEnroll = [...newEnroll, student.id];
    }
  });
  return newEnroll;
};

const remindUnpaid = (recordIds) => {
  const unpaidIds = recordIds.filter((id) =>
    studentRecords.find((student) => !student.paid && id === student.id)
  );
  printRecords(unpaidIds);
};

// ********************************

var currentEnrollment = [410, 105, 664, 375];

var studentRecords = [
  { id: 313, name: "Frank", paid: true },
  { id: 410, name: "Suzy", paid: true },
  { id: 709, name: "Brian", paid: false },
  { id: 105, name: "Henry", paid: false },
  { id: 502, name: "Mary", paid: true },
  { id: 664, name: "Bob", paid: false },
  { id: 250, name: "Peter", paid: true },
  { id: 375, name: "Sarah", paid: true },
  { id: 867, name: "Greg", paid: false },
];

printRecords(currentEnrollment);
console.log("----");
currentEnrollment = paidStudentsToEnroll();
printRecords(currentEnrollment);
console.log("----");
remindUnpaid(currentEnrollment);

/*
	Bob (664): Not Paid
	Henry (105): Not Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Frank (313): Paid
	Henry (105): Not Paid
	Mary (502): Paid
	Peter (250): Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Henry (105): Not Paid
*/
