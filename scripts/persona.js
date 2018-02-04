define(["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var Persona = /** @class */ (function () {
        function Persona(nSS, n, f) {
            this.NumSS = nSS;
            this.Nombre = n;
            this.FechaNacimiento = f;
        }
        Persona.prototype.getNumSS = function () {
            return this.NumSS;
        };
        Persona.prototype.getNombre = function () {
            return this.Nombre;
        };
        Persona.prototype.getFN = function () {
            return this.FechaNacimiento;
        };
        return Persona;
    }());
    exports.Persona = Persona;
});
