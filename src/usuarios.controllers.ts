import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { UsuariosService } from './usuarios.services';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Get()
  obtenerUsuarios() {
    return this.usuariosService.obtenerTodos();
  }

  @Get(':id')
  obtenerUsuarioPorId(@Param('id') id: string) {
    return this.usuariosService.obtenerPorId(Number(id));
  }

  @Post()
  crearUsuario(@Body() body: { nombre: string; email: string; rol: string }) {
    return this.usuariosService.crear(body);
  }

  @Patch(':id')
  actualizarUsuario(@Param('id') id: string, @Body() body: { nombre?: string; email?: string; rol?: string }) {
    return this.usuariosService.actualizar(Number(id), body);
  }

  @Delete(':id')
  eliminarUsuario(@Param('id') id: string) {
    return this.usuariosService.eliminar(Number(id));
  }
}