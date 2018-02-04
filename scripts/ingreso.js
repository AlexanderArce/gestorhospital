define(["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var Ingreso = /** @class */ (function () {
        function Ingreso(s, p) {
            this.codigo = 0;
            this.Sintomas = [];
            this.codigo = Ingreso.cont++;
            this.Sintomas = s;
            this.FechaHora = new Date();
            this.Estado = 0;
            this.Paciente = p;
        }
        Ingreso.prototype.getSintomas = function () {
            return this.Sintomas;
        };
        Ingreso.prototype.getEstado = function () {
            return this.Estado;
        };
        Ingreso.prototype.getPaciente = function () {
            return this.Paciente;
        };
        Ingreso.prototype.getFechaHora = function () {
            return this.FechaHora;
        };
        Ingreso.prototype.getCodigo = function () {
            return this.codigo;
        };
        Ingreso.prototype.getMedico = function () {
            return this.Medico;
        };
        Ingreso.prototype.setMedico = function (medico) {
            this.Medico = medico;
        };
        Ingreso.prototype.setEstado = function (est) {
            this.Estado = est;
        };
        Ingreso.prototype.setDiagnostico = function (di) {
            this.Diagnostico = di;
        };
        Ingreso.prototype.getDiagnostico = function () {
            return this.Diagnostico;
        };
        Ingreso.cont = 1;
        return Ingreso;
    }());
    exports.Ingreso = Ingreso;
});
