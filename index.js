import ReadFile from './ReadFile.js'

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

new ReadFile().handle('studentList.json')