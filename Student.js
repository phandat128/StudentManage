import Person from './Person.js'

export default class Student extends Person{
    id
    point
    classroom

    constructor(id, name, age, gender, point, classroom){
        super(name, age, gender)
        this.id = id
        this.point = point
        this.classroom = classroom
    }

    avaragePoint(){
        return (this.point.getMaths() + this.point.getPhys() + this.point.getChems() + this.point.getEng())/4
    }

    isPass(){
        return (this.point.getMaths() > 4) && (this.point.getPhys() > 4) && (this.point.getChems() > 4) && (this.point.getEng() > 4)
    }

    letterPoint(){
        if (this.avaragePoint() >= 8.5) return 'A'
        if (this.avaragePoint() >= 7) return 'B'
        if (this.avaragePoint() >= 5.5) return 'C'
        if (this.avaragePoint() >= 5) return 'D+'
        if (this.avaragePoint() >= 4) return 'D'        
        return 'F'
    }
}