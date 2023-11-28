'use strict';

{
  const getPassedStudents = (studentList, failedList) => {
    return studentList.filter((currentStudent) => !failedList.includes(currentStudent))
  }

  const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];
  const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];

  console.log('Сдавшие экзамен студенты: ' + getPassedStudents(allStudents, failedStudents).join(', '));
}