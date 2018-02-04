import { Paciente } from "./paciente";
import { Medico } from "./medico";
import { Ingreso } from "./ingreso";

class Hospital {
    pacientes:Array<Paciente>=[];
    ingresos:Array<Ingreso>=[];
    medicos:Array<Medico>=[];

    MeterMedicos(){
        var medico1:Medico=new Medico(100,"Dr.Oga",new Date(1964,1,5),1);
        var medico2:Medico=new Medico(101,"Dr.Pepe",new Date(1972,2,4),2);
        var medico3:Medico=new Medico(102,"Dra.Pepa",new Date(1987,3,3),3);
        var medico4:Medico=new Medico(103,"Dra.Anna",new Date(1950,4,2),4);
        var medico5:Medico=new Medico(104,"Dr.Alex",new Date(1990,5,1),5);
        this.medicos.push(medico1);
        this.medicos.push(medico2);
        this.medicos.push(medico3);
        this.medicos.push(medico4);
    }
    NuevoPaciente(nSS:number,n:string,fn:Date,s:string){
        var paciente:Paciente=new Paciente(nSS,n,fn,s);
        this.pacientes.push(paciente);
    }
    NuevoIngreso(nSS:number,sint:Array<string>){
        for (var i=0;i<this.pacientes.length;i++) {
            if (this.pacientes[i].getNumSS()==nSS){
                var x:number=i;
            }
        }
        var ingreso:Ingreso=new Ingreso(sint,this.pacientes[x]);
        this.ingresos.push(ingreso);
    }
    ListaIngresosPendientes(){
        for (var i=0;i<this.ingresos.length;i++) {
            if (this.ingresos[i].getEstado()==0){
                var factual=this.ingresos[i].getFechaHora();
                var fn=this.ingresos[i].getPaciente().getFN();
                var edad:number=(factual.getTime()-fn.getTime())/(1000*60*60*24*365);
                alert("\nNombre: "+this.ingresos[i].getPaciente().getNombre()+
                "\nFecha/Hora: "+this.ingresos[i].getFechaHora().toString()+
                "\nSexo: "+this.ingresos[i].getPaciente().getSexo()+
                "\nEdad: "+Math.floor(edad).toString());
            }
        }
    }
    AsignarIngresoMedico(codigo:number,nc:number){
        for (var i=0;i<this.ingresos.length;i++) {
            if(this.ingresos[i].getCodigo()==codigo){
                for (var x=0;x<this.medicos.length;x++) {
                    if (this.medicos[x].getNumeroColegiado()==nc){
                        this.ingresos[i].setMedico(this.medicos[x]);
                        this.ingresos[i].setEstado(1);
                    }
                }
            }
        }
    }
    DiagnosticarIngreso(codigo:number,di:string){
        for (var i=0;i<this.ingresos.length;i++) {
            if(this.ingresos[i].getCodigo()==codigo){
                this.ingresos[i].setDiagnostico(di);
            }
        }
    }
    DarAlta(codigo:number){
        for (var i=0;i<this.ingresos.length;i++) {
            if(this.ingresos[i].getCodigo()==codigo && this.ingresos[i].getDiagnostico()!="" && this.ingresos[i].getEstado()!=0){
                this.ingresos[i].setEstado(2);
                alert("Paciente dado de alta con éxito");
            } else {
                alert("No se ha podido dar de alta al paciente");
            }
        }
    }
    ConsultarHistorialPaciente(nSS:number){
        for (var i=0;i<this.pacientes.length;i++) {
            if (this.pacientes[i].getNumSS()==nSS){
                var factual=this.ingresos[i].getFechaHora();
                var fn=this.ingresos[i].getPaciente().getFN();
                var edad:number=(factual.getTime()-fn.getTime())/(1000*60*60*24*365);
                alert("Nombre: "+this.ingresos[i].getPaciente().getNombre()+
                "\nSexo: "+this.ingresos[i].getPaciente().getSexo()+
                "\nEdad: "+Math.floor(edad).toString());
            }
        }
        for (var i=0;i<this.ingresos.length;i++) {
            if (this.ingresos[i].getPaciente().getNumSS()==nSS){
                alert("Fecha: "+this.ingresos[i].getFechaHora()+"\nSintomas: "+this.ingresos[i].getSintomas().toString()+"\nDiagnostico: "+this.ingresos[i].getDiagnostico());
            }
        }
    }
    ListadoMedicos(){
        for (var i=0;i<this.medicos.length;i++) {
            var factual=new Date();
            var fn=this.medicos[i].getFN();
            var edad:number=(factual.getTime()-fn.getTime())/(1000*60*60*24*365);
            alert("Nombre: "+this.medicos[i].getNombre()+
                "\nNº de colegiado: "+this.medicos[i].getNumeroColegiado()+
                "\nEdad: "+Math.floor(edad).toString());
        }
    }
    BuscarPacient(nombre:string){
        for (var i=0;i<this.pacientes.length;i++) {
            if (this.pacientes[i].getNombre().toLowerCase().indexOf(nombre.toLowerCase())!=-1){
                var factual=new Date();
                var fn=this.pacientes[i].getFN();
                var edad:number=(factual.getTime()-fn.getTime())/(1000*60*60*24*365);
                alert("Nombre: "+this.pacientes[i].getNombre()+
                "\nSexo: "+this.pacientes[i].getSexo()+
                "\nEdad: "+Math.floor(edad).toString());
            }

        }
        
    }
}

var hospital=new Hospital();
hospital.MeterMedicos();
function nPaciente(){
    var nSS:number=parseInt(prompt("Numero de la SS: "));
    var n:string=prompt("Nombre: ");
    var f:string=prompt("Fecha de nacimiento (dd/mm/yyyy): ");
    var fn=f.split("/");
    var fecha:Date=new Date(parseInt(fn[2]),parseInt(fn[1])-1,parseInt(fn[0]));
    var s:string=prompt("Sexo:");
    hospital.NuevoPaciente(nSS,n,fecha,s);
}
function nIngreso(){
    var nSS:number=parseInt(prompt("Numero de la SS: "));
    var s:string=prompt("Sintomas (separados por coma): ");
    var sint=s.split(",");
    hospital.NuevoIngreso(nSS,sint);
}
function listaIngresos(){
    console.log(hospital.ingresos);
    hospital.ListaIngresosPendientes();
}
function nIngresoMedico(){
    var codigo:number=parseInt(prompt("Codigo de ingreso: "));
    var numc:number=parseInt(prompt("Numero de colegiado: "));
    hospital.AsignarIngresoMedico(codigo,numc);
}
function dIngreso(){
    var codigo:number=parseInt(prompt("Codigo de ingreso: "));
    var di:string=prompt("Diagnostico: ");
    hospital.DiagnosticarIngreso(codigo,di);
}
function dAlta(){
    var codigo:number=parseInt(prompt("Codigo de ingreso: "));
    hospital.DarAlta(codigo);
}
function Consulta(){
    var nSS:number=parseInt(prompt("Numero de la SS: "));
    hospital.ConsultarHistorialPaciente(nSS);
}
function listaMedicos(){
    hospital.ListadoMedicos();
}
function Buscar(){
    var nombre:string=prompt("Nombre del paciente: ");
    hospital.BuscarPacient(nombre);
}
document.getElementById("alta").onclick=nPaciente;
document.getElementById("ingreso").onclick=nIngreso;
document.getElementById("listar").onclick=listaIngresos;
document.getElementById("ingresomedico").onclick=nIngresoMedico;
document.getElementById("diagnostico").onclick=dIngreso;
document.getElementById("alta2").onclick=dAlta;
document.getElementById("consulta").onclick=Consulta;
document.getElementById("lmedico").onclick=listaMedicos;
document.getElementById("buscar").onclick=Buscar;