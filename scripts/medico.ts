import { Persona } from "./persona";
export class Medico extends Persona {
    private NumeroColegiado: number;

    constructor(nSS:number,n:string,f:Date,nc:number){
        super(nSS,n,f);
        this.NumeroColegiado=nc;
    }
    getNumeroColegiado():number{
        return this.NumeroColegiado;
    }
}