import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class UsuariosService {
 private usuarios = [
  { id: 1, nombre: 'Carlos Administrador', email: 'admin@restaurante.com', rol: 'ADMIN' },
  { id: 2, nombre: 'Ana Camarera', email: 'ana@restaurante.com', rol: 'CAMARERO' },
  { id: 3, nombre: 'Pedro Cliente', email: 'pedro@gmail.com', rol: 'CLIENTE' },
];

  obtenerTodos() {
    return this.usuarios;
  }

  obtenerPorId(id: number) {
    const usuario = this.usuarios.find(u => u.id === id);
    if (!usuario) {
      throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
    }
    return usuario;
  }

  crear(nuevoUsuario: { nombre: string; email: string; rol: string }) {
    const id = this.usuarios.length > 0 ? this.usuarios[this.usuarios.length - 1].id + 1 : 1;
    const usuarioConId = { id, ...nuevoUsuario };
    this.usuarios.push(usuarioConId);
    return usuarioConId;
  }

  actualizar(id: number, datosActualizados: { nombre?: string; email?: string; rol?: string }) {
    const usuario = this.obtenerPorId(id);
    Object.assign(usuario, datosActualizados);
    return usuario;
  }

  eliminar(id: number) {
    const index = this.usuarios.findIndex(u => u.id === id);
    if (index === -1) {
      throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
    }
    const eliminado = this.usuarios.splice(index, 1);
    return { mensaje: `Usuario con ID ${id} eliminado correctamente`, eliminado: eliminado[0] };
  }
}