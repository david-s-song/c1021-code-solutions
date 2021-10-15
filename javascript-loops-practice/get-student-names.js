/* exported getStudentNames */
function getStudentNames(students) {
  var studentNames = [];
  for (var name in students) {
    studentNames.push(students[name]);
  }
  return studentNames;
}

// use .map method?
// did not pass
