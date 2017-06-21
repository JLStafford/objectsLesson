var classrooms = [{
    teacher: {
      name: "John Keating",
      subject: "Literature",
      age: 57
    },
    students: [{
      name: "John",
      age: 32
    },
    {
      name: "Suzy",
      age: 29
    },
    {
      name: "Jill",
      age: 44
    },
    {
      name: "Joe",
      age: 20
    }]
  },{
    teacher: {
      name: "Lillian Beauregard",
      subject: "Math",
      age: 74
    },
    students: [{
      name: "Johnny",
      age: 14
    },
    {
      name: "Suzie",
      age: 18
    },
    {
      name: "Jo",
      age: 22
    }]
  },{
    teacher: {
      name: "Mr. Schmidt",
      subject: "Literature",
      age: 50
    },
    students: [{
      name: "Bob",
      age: 32
    },
    {
      name: "George",
      age: 46
    }]
  }];

// var num = 0;
// var numStudents = 0;

// for (var i = 0; i < classrooms.length; i += 1) {
//   var arrStudents = classrooms[i]["students"]
//   for (var j = 0; j < arrStudents.length; j += 1) {
//     num += arrStudents[j]["age"];
//     numStudents += 1;
//   }
//   var answer = (num/numStudents);
// }


//   var num = 0;
//   var numTeachers = 0;

// for (var i = 0; i < classrooms.length; i += 1) {
//   num += classrooms[i]["teacher"]["age"];
//   numTeachers += 1;
//   var answer = (num/numTeachers);
// }

var numStudentsLit = 0;
for (var i = 0; i < classrooms.length; i++) {
  if (classrooms[i]["teacher"]["subject"] === "Literature") {
    numStudentsLit += classrooms[i]["students"].length
  }

}
  console.log(numStudentsLit);





  
