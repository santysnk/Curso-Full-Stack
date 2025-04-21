export class CajaDeTermo {
    private material:string
    private dimesion:string

    constructor(pMaterial:string,pDimension:string){
        this.material = pMaterial
        this.dimesion = pDimension
    }

    getMaterial():string{
        return this.material
    }

    getDimesion():string{
        return this.dimesion
    }
    
}