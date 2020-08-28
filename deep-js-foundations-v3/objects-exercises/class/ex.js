class Helpers {
  sortByNameAsc(record1, record2) {
    return record1.name < record2.name ? -1 : 1;
  }

  printRecord(record) {
    console.log(
      `${record.name} (${record.id}): ${record.paid ? "Paid" : "Not Paid"}`
    );
  }
}

class Workshop extends Helpers {
  #currentEnrollment = [];
  #studentRecords = [];

  addStudent(id, name, paid) {
    this.#studentRecords.push({ id, name, paid });
  }

  enrollStudent(id) {
    if (!this.#currentEnrollment.includes(id)) {
      this.#currentEnrollment.push(id);
    }
  }

  printCurrentEnrollment() {
    this.printRecords(this.#currentEnrollment);
  }

  enrollPaidStudents() {
    this.#currentEnrollment = this.paidStudentsToEnroll();
    this.printCurrentEnrollment();
  }

  remindUnpaidStudents() {
    this.remindUnpaid(this.#currentEnrollment);
  }

  getStudentFromId = (studentId) => {
    return this.#studentRecords.find(matchId);

    // *************************

    function matchId(record) {
      return record.id == studentId;
    }
  };

  printRecords(recordIds) {
    var records = recordIds.map(this.getStudentFromId);

    records.sort(this.sortByNameAsc);

    records.forEach(this.printRecord);
  }

  paidStudentsToEnroll() {
    var recordsToEnroll = this.#studentRecords.filter(this.needToEnroll);

    var idsToEnroll = recordsToEnroll.map(this.getStudentId);

    return [...this.#currentEnrollment, ...idsToEnroll];
  }

  needToEnroll = (record) => {
    return record.paid && !this.#currentEnrollment.includes(record.id);
  };

  getStudentId(record) {
    return record.id;
  }

  remindUnpaid(recordIds) {
    var unpaidIds = recordIds.filter(this.notYetPaid);

    this.printRecords(unpaidIds);
  }

  notYetPaid = (studentId) => {
    var record = this.getStudentFromId(studentId);
    return !record.paid;
  };
}

// ********************************

var deepJS = new Workshop();

deepJS.addStudent(311, "Frank", true);
deepJS.addStudent(410, "Suzy", true);
deepJS.addStudent(709, "Brian", false);
deepJS.addStudent(105, "Henry", false);
deepJS.addStudent(502, "Mary", true);
deepJS.addStudent(664, "Bob", false);
deepJS.addStudent(250, "Peter", true);
deepJS.addStudent(375, "Sarah", true);
deepJS.addStudent(867, "Greg", false);

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
