export default class Point{
    constructor(maths, phys, chems, eng){
        this.maths = maths
        this.phys = phys
        this.chems = chems
        this.eng = eng
    }

    get_maths(){
        return this.maths
    }

    get_phys(){
        return this.phys
    }

    get_chems(){
        return this.chems
    }

    get_eng(){
        return this.eng
    }
}