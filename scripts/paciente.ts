import { Persona } from "./persona";
export class Paciente extends Persona {
    private sexo:string;

    constructor(nSS:number,n:string,f:Date,s:string){
        super(nSS,n,f);
        this.sexo=s;
    }
    getSexo():string{
        return this.sexo;
    }
}