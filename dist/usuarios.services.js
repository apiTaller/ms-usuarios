"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuariosService = void 0;
const common_1 = require("@nestjs/common");
let UsuariosService = class UsuariosService {
    constructor() {
        this.usuarios = [
            { id: 1, nombre: 'Carlos Administrador', email: 'admin@restaurante.com', rol: 'ADMIN' },
            { id: 2, nombre: 'Ana Camarera', email: 'ana@restaurante.com', rol: 'CAMARERO' },
            { id: 3, nombre: 'Pedro Cliente', email: 'pedro@gmail.com', rol: 'CLIENTE' },
        ];
    }
    obtenerTodos() {
        return this.usuarios;
    }
    obtenerPorId(id) {
        const usuario = this.usuarios.find(u => u.id === id);
        if (!usuario) {
            throw new common_1.NotFoundException(`Usuario con ID ${id} no encontrado`);
        }
        return usuario;
    }
    crear(nuevoUsuario) {
        const id = this.usuarios.length > 0 ? this.usuarios[this.usuarios.length - 1].id + 1 : 1;
        const usuarioConId = { id, ...nuevoUsuario };
        this.usuarios.push(usuarioConId);
        return usuarioConId;
    }
    actualizar(id, datosActualizados) {
        const usuario = this.obtenerPorId(id);
        Object.assign(usuario, datosActualizados);
        return usuario;
    }
    eliminar(id) {
        const index = this.usuarios.findIndex(u => u.id === id);
        if (index === -1) {
            throw new common_1.NotFoundException(`Usuario con ID ${id} no encontrado`);
        }
        const eliminado = this.usuarios.splice(index, 1);
        return { mensaje: `Usuario con ID ${id} eliminado correctamente`, eliminado: eliminado[0] };
    }
};
exports.UsuariosService = UsuariosService;
exports.UsuariosService = UsuariosService = __decorate([
    (0, common_1.Injectable)()
], UsuariosService);
//# sourceMappingURL=usuarios.services.js.map