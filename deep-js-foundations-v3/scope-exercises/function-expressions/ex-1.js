function printRecords(recordIds) {
  var students = recordIds.map(findStudent);
  students.sort(sortStudentsbyName);
  students.forEach(printStudent);
}

function paidStudentsToEnroll() {
  var newEnroll = [...currentEnrollment];
  studentRecords.forEach(function addEnrolledStudent(student) {
    if (!currentEnrollment.includes(student.id) && student.paid) {
      newEnroll = [...newEnroll, student.id];
    }
  });
  return newEnroll;
}

function remindUnpaid(recordIds) {
  var unpaidIds = recordIds.filter(function findRecord(id) {
    return studentRecords.find(function findUnpaidStudent(student) {
      return !student.paid && id === student.id;
    });
  });
  printRecords(unpaidIds);
}

/************Utility Functions */
function findStudent(id) {
  return studentRecords.find(function getId(item) {
    return item.id === id;
  });
}
function sortStudentsbyName(student1, student2) {
  return student1.name < student2.name ? -1 : 1;
}
function printStudent(student) {
  console.log(
    `${student.name} (${student.id}) ${student.paid ? "Paid" : "Not Paid"}`
  );
}

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

/* Output Should be: 

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
