var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Personaje = /** @class */ (function () {
    function Personaje(id, nombre, apellido, edad) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    Personaje.prototype.getId = function () {
        return this.id;
    };
    Personaje.prototype.setId = function (value) {
        this.id = value;
    };
    return Personaje;
}());
var Heroe = /** @class */ (function (_super) {
    __extends(Heroe, _super);
    function Heroe(id, nombre, apellido, edad, alias, editorial) {
        var _this = _super.call(this, id, nombre, apellido, edad) || this;
        _this.lado = 1;
        _this.alias = alias;
        _this.editorial = editorial;
        return _this;
    }
    return Heroe;
}(Personaje));
var Villano = /** @class */ (function (_super) {
    __extends(Villano, _super);
    function Villano(id, nombre, apellido, edad, alias, editorial) {
        var _this = _super.call(this, id, nombre, apellido, edad) || this;
        _this.lado = 2;
        _this.alias = alias;
        _this.editorial = editorial;
        return _this;
    }
    return Villano;
}(Personaje));
