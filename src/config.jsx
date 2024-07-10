export const drawListItems = ["home", "classes", "learner profile", "teacher", 'logout'];

export const learnerProfileTabs = ["attendance", "home work", "assessments"];

export const homeTabs = ["notifications", "upcoming events"];

export const colors = {blueGrey: (opacity)=>`rgba(189,195,199,${opacity})`, red: (opacity)=>`rgba(70,25,25,${opacity})`}

export const allStudents = [
    { adminNo: "100-24", firstname: "John", lastname: "Smith", grade:'10', registerCl:'E2', classes: ['VL1', 'AB2', 'LR1'] },
    { adminNo: "101-24", firstname: "First", lastname: "last", grade:'10', registerCl:'E2', classes: ['AB2', 'LR1'] },
    { adminNo: "102-24", firstname: "Peter", lastname: "Something", grade:'10', registerCl:'E5', classes: ['VL2', 'AB1', 'LR1'] },
    { adminNo: "105-22", firstname: "Luke", lastname: "Solomon", grade:'10', registerCl:'E2', classes: ['AB1', 'LR1'] },
    { adminNo: "109-20", firstname: "Matthew", lastname: "Daniels", grade:'10', registerCl:'E2', classes: ['AB1', 'LR1'] },
    { adminNo: "106-23", firstname: "Again", lastname: "Random", grade:'10', registerCl:'E2', classes: ['AB1', 'LR1'] },
  ];

export const allClasses =  [
    // { subject: 'register', grade: '10', registerCl: 'E2', cl:'1',teacherCode: 'VL', classCode:`${teacherCode}-${grade}-${cl}`},
    { grade: "9A1", subject: "mathematics", teacherCode: "VL", classCode: "VL9-1" },
    { grade: "9E2", subject: "mathematics", teacherCode: "VL", classCode: "VL9-2" },
    {
      grade: "10",
      subject: "technical mathematics",
      teacherCode: "AB",
      classCode: "AB2",
    },
    { grade: "11", subject: "science", teacherCode: "LR", classCode: "LR1" },
  ];

export const allTeachers = [
  {name:'Valentine',teacherCode:'VL', registerCl:'10E2'},
  {name:'Abrahams',teacherCode:'AB', registerCl:'10E5'},
  {name:'Lourens',teacherCode:'LR', registerCl:'11E2'}
];