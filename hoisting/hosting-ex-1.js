// Hoisting
function getStudentFromId(studentId) {
  return studentRecords.find(matchId);


  function matchId(record) {
    return (record.id == studentId);
  };
};


function printRecords(recordIds) {
  var records = recordIds.map(getStudentFromId);

  records.sort(sortByNameAsc);
  records.forEach(printRecord);
};

function printRecord(record) {
  console.log(`${record.name} (${record.id}: ${record.paid})`);
};

function sortByNameAsc(record1, record2) {

};

export default {

}