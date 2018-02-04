export class Persona {
    private NumSS: number;
    private Nombre: string;
    private FechaNacimiento: Date;

    constructor(nSS:number,n:string,f:Date){
        this.NumSS=nSS;
        this.Nombre=n;
        this.FechaNacimiento=f;
    }
    getNumSS():number {
        return this.NumSS;
    }
    getNombre():string{
        return this.Nombre;
    }
    getFN():Date{
        return this.FechaNacimiento;
    }
}