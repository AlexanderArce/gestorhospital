import { Paciente } from "./paciente";
import { Medico } from "./medico";

export class Ingreso {
    static cont=1;
    private codigo:number=0;
    private FechaHora:Date;
    private Sintomas:Array<string>=[];
    private Diagnostico:string;
    private Estado:number;
    private Paciente:Paciente;
    private Medico:Medico;

    constructor(s:Array<string>,p:Paciente){
        this.codigo=Ingreso.cont++;
        this.Sintomas=s;
        this.FechaHora=new Date();
        this.Estado=0;
        this.Paciente=p;
    }
    getSintomas():Array<string>{
        return this.Sintomas;
    }
    getEstado():number{
        return this.Estado;
    }
    getPaciente():Paciente{
        return this.Paciente;
    }
    getFechaHora():Date{
        return this.FechaHora;
    }
    getCodigo():number{
        return this.codigo;
    }
    getMedico():Medico{
        return this.Medico;
    }
    setMedico(medico:Medico){
        this.Medico=medico;
    }
    setEstado(est:number){
        this.Estado=est;
    }
    setDiagnostico(di:string){
        this.Diagnostico=di;
    }
    getDiagnostico(){
        return this.Diagnostico;
    }
}