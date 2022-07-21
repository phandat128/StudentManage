export default class Point{
    maths
    phys
    chems
    eng

    constructor(maths, phys, chems, eng){
        this.maths = maths
        this.phys = phys
        this.chems = chems
        this.eng = eng
    }

    getMaths(){
        return this.maths
    }

    getPhys(){
        return this.phys
    }

    getChems(){
        return this.chems
    }

    getEng(){
        return this.eng
    }
}