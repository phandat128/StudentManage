import Point from './Point.js'
import Student from './Student.js'

export default class Action {

    printList(list){ //print the list of student
        console.log("Danh sach sinh vien:")
        for (let e of list){
            console.log(e)
        }
    }

    jsonToStudent(data){ //parse json data to array of Student's instances
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

    lowestPointStudent(list){
        list.sort((a,b) => {
            return (a.avaragePoint() - b.avaragePoint())
        })
        return `Sinh vien thap diem nhat la: ${list[0].name}`
    }

    highestPointStudent(list){
        list.sort((a,b) => {
            return (b.avaragePoint() - a.avaragePoint())
        })
        return `Sinh vien cao diem nhat la: ${list[0].name}`
    }

    notPassStudentList(list){
        console.log('Danh sach sinh vien khong qua mon:')
        for (let e of list){
            if (!e.isPass()) console.log(e.name)
        }
        return "-----------"
    }
    
}