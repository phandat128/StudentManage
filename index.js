import Student from './Student.js'
import Point from './Point.js'
import fs from 'fs'

/*** create json file
var student1 = new Student(1232,'Nguyen Van An', 18, 'nam', new Point(7,8.5,8,9), 'KHMT04')
var student2 = new Student(3423,'Pham Thi Bich', 19, 'nu', new Point(5,6.5,8.5,4.5), 'KHMT04')
var student3 = new Student(2345,'Hoang Van Khanh', 19, 'nam', new Point(6.25,7,9,3.5), 'KHMT04')
var student4 = new Student(9813,'Ha Thi Hong', 19, 'nu', new Point(7,8,4.5,6), 'KHMT04')
var student5 = new Student(7238,'Vo Van Nam', 20, 'nam', new Point(9,7.5,8.5,9.5), 'KHMT04')

var studentList = [student1,student2,student3,student4,student5];

var json = JSON.stringify(studentList)

fs.writeFile('studentList.json', json, 'utf8', ()=> {
    return 0
})
*/

function jsonToStudent(data){
    const list = JSON.parse(data)
    let studentList = []
    for(let e of list){
        let pointObj = Object.assign(new Point(),e.point)
        let student = Object.assign(new Student(), e)
        student.point = pointObj
        studentList.push(student)
    }
    return studentList
}

function lowestPointStudent(list){
    list.sort((a,b) => {
        return (a.avaragePoint() - b.avaragePoint())
    })
    return `Sinh vien thap diem nhat la: ${list[0].name}`
}

function highestPointStudent(list){
    list.sort((a,b) => {
        return (b.avaragePoint() - a.avaragePoint())
    })
    return `Sinh vien cao diem nhat la: ${list[0].name}`
}

function printList(list){ //print the list of student
    console.log("Danh sach sinh vien:")
    for (let e of list){
        console.log(e)
    }
}

function notPassStudent(list){
    console.log('Danh sach sinh vien khong qua mon:')
    for (let e of list){
        if (!e.isPass()) console.log(e.name)
    }
}

fs.readFile('studentList.json', 'utf8',  function(err, data){
    if (err){
        return console.log('error')
    }
    let studentList = jsonToStudent(data)

    printList(studentList)
    console.log(highestPointStudent(studentList))
    console.log(lowestPointStudent(studentList))
    console.log(notPassStudent(studentList))
})
