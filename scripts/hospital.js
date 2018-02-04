define(["require", "exports", "./paciente", "./medico", "./ingreso"], function (require, exports, paciente_1, medico_1, ingreso_1) {
    "use strict";
    exports.__esModule = true;
    var Hospital = /** @class */ (function () {
        function Hospital() {
            this.pacientes = [];
            this.ingresos = [];
            this.medicos = [];
        }
        Hospital.prototype.MeterMedicos = function () {
            var medico1 = new medico_1.Medico(100, "Dr.Oga", new Date(1964, 1, 5), 1);
            var medico2 = new medico_1.Medico(101, "Dr.Pepe", new Date(1972, 2, 4), 2);
            var medico3 = new medico_1.Medico(102, "Dra.Pepa", new Date(1987, 3, 3), 3);
            var medico4 = new medico_1.Medico(103, "Dra.Anna", new Date(1950, 4, 2), 4);
            var medico5 = new medico_1.Medico(104, "Dr.Alex", new Date(1990, 5, 1), 5);
            this.medicos.push(medico1);
            this.medicos.push(medico2);
            this.medicos.push(medico3);
            this.medicos.push(medico4);
        };
        Hospital.prototype.NuevoPaciente = function (nSS, n, fn, s) {
            var paciente = new paciente_1.Paciente(nSS, n, fn, s);
            this.pacientes.push(paciente);
        };
        Hospital.prototype.NuevoIngreso = function (nSS, sint) {
            for (var i = 0; i < this.pacientes.length; i++) {
                if (this.pacientes[i].getNumSS() == nSS) {
                    var x = i;
                }
            }
            var ingreso = new ingreso_1.Ingreso(sint, this.pacientes[x]);
            this.ingresos.push(ingreso);
        };
        Hospital.prototype.ListaIngresosPendientes = function () {
            for (var i = 0; i < this.ingresos.length; i++) {
                if (this.ingresos[i].getEstado() == 0) {
                    var factual = this.ingresos[i].getFechaHora();
                    var fn = this.ingresos[i].getPaciente().getFN();
                    var edad = (factual.getTime() - fn.getTime()) / (1000 * 60 * 60 * 24 * 365);
                    alert("\nNombre: " + this.ingresos[i].getPaciente().getNombre() +
                        "\nFecha/Hora: " + this.ingresos[i].getFechaHora().toString() +
                        "\nSexo: " + this.ingresos[i].getPaciente().getSexo() +
                        "\nEdad: " + Math.floor(edad).toString());
                }
            }
        };
        Hospital.prototype.AsignarIngresoMedico = function (codigo, nc) {
            for (var i = 0; i < this.ingresos.length; i++) {
                if (this.ingresos[i].getCodigo() == codigo) {
                    for (var x = 0; x < this.medicos.length; x++) {
                        if (this.medicos[x].getNumeroColegiado() == nc) {
                            this.ingresos[i].setMedico(this.medicos[x]);
                            this.ingresos[i].setEstado(1);
                        }
                    }
                }
            }
        };
        Hospital.prototype.DiagnosticarIngreso = function (codigo, di) {
            for (var i = 0; i < this.ingresos.length; i++) {
                if (this.ingresos[i].getCodigo() == codigo) {
                    this.ingresos[i].setDiagnostico(di);
                }
            }
        };
        Hospital.prototype.DarAlta = function (codigo) {
            for (var i = 0; i < this.ingresos.length; i++) {
                if (this.ingresos[i].getCodigo() == codigo && this.ingresos[i].getDiagnostico() != "" && this.ingresos[i].getEstado() != 0) {
                    this.ingresos[i].setEstado(2);
                    alert("Paciente dado de alta con éxito");
                }
                else {
                    alert("No se ha podido dar de alta al paciente");
                }
            }
        };
        Hospital.prototype.ConsultarHistorialPaciente = function (nSS) {
            for (var i = 0; i < this.pacientes.length; i++) {
                if (this.pacientes[i].getNumSS() == nSS) {
                    var factual = this.ingresos[i].getFechaHora();
                    var fn = this.ingresos[i].getPaciente().getFN();
                    var edad = (factual.getTime() - fn.getTime()) / (1000 * 60 * 60 * 24 * 365);
                    alert("Nombre: " + this.ingresos[i].getPaciente().getNombre() +
                        "\nSexo: " + this.ingresos[i].getPaciente().getSexo() +
                        "\nEdad: " + Math.floor(edad).toString());
                }
            }
            for (var i = 0; i < this.ingresos.length; i++) {
                if (this.ingresos[i].getPaciente().getNumSS() == nSS) {
                    alert("Fecha: " + this.ingresos[i].getFechaHora() + "\nSintomas: " + this.ingresos[i].getSintomas().toString() + "\nDiagnostico: " + this.ingresos[i].getDiagnostico());
                }
            }
        };
        Hospital.prototype.ListadoMedicos = function () {
            for (var i = 0; i < this.medicos.length; i++) {
                var factual = new Date();
                var fn = this.medicos[i].getFN();
                var edad = (factual.getTime() - fn.getTime()) / (1000 * 60 * 60 * 24 * 365);
                alert("Nombre: " + this.medicos[i].getNombre() +
                    "\nNº de colegiado: " + this.medicos[i].getNumeroColegiado() +
                    "\nEdad: " + Math.floor(edad).toString());
            }
        };
        Hospital.prototype.BuscarPacient = function (nombre) {
            for (var i = 0; i < this.pacientes.length; i++) {
                if (this.pacientes[i].getNombre().toLowerCase().indexOf(nombre.toLowerCase()) != -1) {
                    var factual = new Date();
                    var fn = this.pacientes[i].getFN();
                    var edad = (factual.getTime() - fn.getTime()) / (1000 * 60 * 60 * 24 * 365);
                    alert("Nombre: " + this.pacientes[i].getNombre() +
                        "\nSexo: " + this.pacientes[i].getSexo() +
                        "\nEdad: " + Math.floor(edad).toString());
                }
            }
        };
        return Hospital;
    }());
    var hospital = new Hospital();
    hospital.MeterMedicos();
    function nPaciente() {
        var nSS = parseInt(prompt("Numero de la SS: "));
        var n = prompt("Nombre: ");
        var f = prompt("Fecha de nacimiento (dd/mm/yyyy): ");
        var fn = f.split("/");
        var fecha = new Date(parseInt(fn[2]), parseInt(fn[1]) - 1, parseInt(fn[0]));
        var s = prompt("Sexo:");
        hospital.NuevoPaciente(nSS, n, fecha, s);
    }
    function nIngreso() {
        var nSS = parseInt(prompt("Numero de la SS: "));
        var s = prompt("Sintomas (separados por coma): ");
        var sint = s.split(",");
        hospital.NuevoIngreso(nSS, sint);
    }
    function listaIngresos() {
        console.log(hospital.ingresos);
        hospital.ListaIngresosPendientes();
    }
    function nIngresoMedico() {
        var codigo = parseInt(prompt("Codigo de ingreso: "));
        var numc = parseInt(prompt("Numero de colegiado: "));
        hospital.AsignarIngresoMedico(codigo, numc);
    }
    function dIngreso() {
        var codigo = parseInt(prompt("Codigo de ingreso: "));
        var di = prompt("Diagnostico: ");
        hospital.DiagnosticarIngreso(codigo, di);
    }
    function dAlta() {
        var codigo = parseInt(prompt("Codigo de ingreso: "));
        hospital.DarAlta(codigo);
    }
    function Consulta() {
        var nSS = parseInt(prompt("Numero de la SS: "));
        hospital.ConsultarHistorialPaciente(nSS);
    }
    function listaMedicos() {
        hospital.ListadoMedicos();
    }
    function Buscar() {
        var nombre = prompt("Nombre del paciente: ");
        hospital.BuscarPacient(nombre);
    }
    document.getElementById("alta").onclick = nPaciente;
    document.getElementById("ingreso").onclick = nIngreso;
    document.getElementById("listar").onclick = listaIngresos;
    document.getElementById("ingresomedico").onclick = nIngresoMedico;
    document.getElementById("diagnostico").onclick = dIngreso;
    document.getElementById("alta2").onclick = dAlta;
    document.getElementById("consulta").onclick = Consulta;
    document.getElementById("lmedico").onclick = listaMedicos;
    document.getElementById("buscar").onclick = Buscar;
});
