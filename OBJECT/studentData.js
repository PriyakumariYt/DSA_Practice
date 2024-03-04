// var data = [];
// function student_marks(nam, sci, chem, bio) {
//   var obj = {
//     name: nam,
//     science: sci,
//     chemistry: chem,
//     biology: bio,
//   };
//   data.push(obj);
// }

// function highScore() {
//   var maximum = -Infinity;
//   var highestScore;

//   for (let i = 0; i < data.length; i++) {
//     var current = data[i];
//     var total = current.science + current.chemistry + current.biology;
//     if (total > maximum) {
//       maximum = total;
//       highestScore = current;
//     }
//   }
//   console.log(highestScore);
// }

// student_marks("rishi", 90, 62, 89);
// student_marks("rishita", 100, 100, 100);
// student_marks("rashmi", 90, 62, 89);
// student_marks("ravi", 98, 25, 79);
// student_marks("rishi", 36, 65, 54);
// student_marks("rishi", 23, 65, 65);
// highScore();

// lowest score

var data = [];
function student_marks(nam, sci, chem, bio) {
  var obj = {
    name: nam,
    science: sci,
    chemistry: chem,
    biology: bio,
  };
  data.push(obj);
}

function lowScore() {
  var maximum = Infinity;
  var lowScore;

  for (let i = 0; i < data.length; i++) {
    var current = data[i];
    var total = current.science + current.chemistry + current.biology;
    if (total < maximum) {
      maximum = total;
      lowScore = current;
    }
  }
  console.log(lowScore);
}

student_marks("rishi", 90, 62, 89);
student_marks("rishita", 100, 100, 100);
student_marks("rashmi", 90, 62, 89);
student_marks("ravi", 98, 25, 79);
student_marks("rishi", 36, 65, 54);
student_marks("rishi2", 23, 65, 65);
lowScore();