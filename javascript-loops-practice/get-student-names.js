/* exported getStudentNames */

function getStudentNames(students) {
  var currentStudentName = [];
  for (var i = 0; i < students.length; i++) {
    currentStudentName.push(students[i].name);
  }
  return currentStudentName;
}
