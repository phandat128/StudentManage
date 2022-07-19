import Point from './Point'

class Student {
    constructor(id, name, age, gender, point, classroom){
        this.id = id
        this.name = name
        this.age = age
        this.gender = gender
        this.point = point
        this.classroom = classroom
    }

    avaragePoint(){
        return (this.point.get_maths() + this.point.get_phys() + this.point.get_chems() + this.point.get_eng())
    }

    isPass(){
        return (this.point.maths > 4) && (this.point.phys > 4) && (this.point.chems > 4) && (this.point.eng > 4)
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

export default Student