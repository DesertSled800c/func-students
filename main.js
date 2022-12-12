const createStudent = (name, grade) => {
    const student = {
        name: name,
        grade: grade
    }
    return student
}

const addMathGrade = (student) => {
    student.math = "B"
    return student
}

const addHistoryGrade = (student) => {
    student.history = "C"
    return student
}

const addScienceGrade = (student) => {
    student.science = "A"
    return student
}

let student = createStudent("Ak", "8th")

console.log(student)
console.log(addMathGrade(student))
console.log(addHistoryGrade(student))
console.log(addScienceGrade(student))

