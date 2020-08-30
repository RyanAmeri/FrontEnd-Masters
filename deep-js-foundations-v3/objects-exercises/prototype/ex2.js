let Helpers = Object.create(null);
Helpers.sortByNameAsc = function (record1, record2) {
  if (record1.name < record2.name) return -1;
  else if (record1.name > record2.name) return 1;
  else return 0;
};
Helpers.printRecord = function (record) {
  console.log(
    `${record.name} (${record.id}): ${record.paid ? "Paid" : "Not Paid"}`
  );
};

let Workshop = Object.create(Helpers);
Workshop.addStudent = function (id, name, paid) {
  this.studentRecords.push({ id, name, paid });
};
Workshop.enrollStudent = function (id) {
  if (!this.currentEnrollment.includes(id)) {
    this.currentEnrollment.push(id);
  }
};
Workshop.printCurrentEnrollment = function () {
  this.printRecords(this.currentEnrollment);
};
Workshop.enrollPaidStudents = function () {
  this.currentEnrollment = this.paidStudentsToEnroll();
  this.printCurrentEnrollment();
};
Workshop.remindUnpaidStudents = function () {
  this.remindUnpaid(this.currentEnrollment);
};
Workshop.getStudentFromId = function (studentId) {
  return this.studentRecords.find(matchId);

  // *************************

  function matchId(record) {
    return record.id == studentId;
  }
};
Workshop.printRecords = function (recordIds) {
  var records = recordIds.map(this.getStudentFromId.bind(this));

  records.sort(this.sortByNameAsc);

  records.forEach(this.printRecord);
};
Workshop.paidStudentsToEnroll = function () {
  var recordsToEnroll = this.studentRecords.filter(
    this.needToEnroll.bind(this)
  );

  var idsToEnroll = recordsToEnroll.map(this.getStudentId);

  return [...this.currentEnrollment, ...idsToEnroll];
};
Workshop.needToEnroll = function (record) {
  return record.paid && !this.currentEnrollment.includes(record.id);
};
Workshop.getStudentId = function (record) {
  return record.id;
};
Workshop.remindUnpaid = function (recordIds) {
  var unpaidIds = recordIds.filter(this.notYetPaid.bind(this));

  this.printRecords(unpaidIds);
};
Workshop.notYetPaid = function (studentId) {
  var record = this.getStudentFromId(studentId);
  return !record.paid;
};

let deepJS = Object.create(Workshop);
deepJS.currentEnrollment = [];
deepJS.studentRecords = [];
deepJS.addStudent(311, "Frank", /*paid=*/ true);
deepJS.addStudent(410, "Suzy", /*paid=*/ true);
deepJS.addStudent(709, "Brian", /*paid=*/ false);
deepJS.addStudent(105, "Henry", /*paid=*/ false);
deepJS.addStudent(502, "Mary", /*paid=*/ true);
deepJS.addStudent(664, "Bob", /*paid=*/ false);
deepJS.addStudent(250, "Peter", /*paid=*/ true);
deepJS.addStudent(375, "Sarah", /*paid=*/ true);
deepJS.addStudent(867, "Greg", /*paid=*/ false);

deepJS.enrollStudent(410);
deepJS.enrollStudent(105);
deepJS.enrollStudent(664);
deepJS.enrollStudent(375);

deepJS.printCurrentEnrollment();
console.log("----");
deepJS.enrollPaidStudents();
console.log("----");
deepJS.remindUnpaidStudents();

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
