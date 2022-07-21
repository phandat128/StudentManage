import fs from 'fs'
import Action from './Action.js'

export default class ReadFile{
    
    handle(fileName) {
        const action = new Action()
        fs.readFile(fileName, 'utf8',  function(err, data){
            if (err){
                return console.log('error')
            }
            let studentList = action.jsonToStudent(data)
            action.printList(studentList)
            console.log(action.highestPointStudent(studentList))
            console.log(action.lowestPointStudent(studentList))
            console.log(action.notPassStudentList(studentList))
        })
    }
}