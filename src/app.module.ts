import { Module } from '@nestjs/common';
import { UsuariosController } from './usuarios.controllers';
import { UsuariosService } from './usuarios.services';
import { UsuarioModule } from './modulos/usuario/usuario.module';

@Module({
  imports: [UsuarioModule],
  controllers: [UsuariosController],
  providers: [UsuariosService],
})
export class AppModule {}