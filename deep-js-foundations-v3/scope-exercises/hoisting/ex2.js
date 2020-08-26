const getStudentFromId = (studentId) => {
  return studentRecords.find((record) => record.id == studentId);
};
const printRecords = (recordIds) => {
  const records = recordIds.map(getStudentFromId);
  records.sort((record1, record2) => (record1.name < record2.name ? -1 : 1));
  records.forEach((record) => {
    console.log(
      `${record.name} (${record.id}): ${record.paid ? "Paid" : "Not Paid"}`
    );
  });
};
const paidStudentsToEnroll = () => {
  const recordsToEnroll = studentRecords.filter(
    (record) => record.paid && !currentEnrollment.includes(record.id)
  );
  const idsToEnroll = recordsToEnroll.map((record) => record.id);
  return [...currentEnrollment, ...idsToEnroll];
};

const remindUnpaid = (recordIds) => {
  const unpaidIds = recordIds.filter((studentId) => {
    const record = getStudentFromId(studentId);
    return !record.paid;
  });
  printRecords(unpaidIds);
};
// ********************************

let currentEnrollment = [410, 105, 664, 375];

const studentRecords = [
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

/* Output should be: 
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
