import { Module } from '@nestjs/common';
import { UsuariosController } from './usuarios.controllers';
import { UsuariosService } from './usuarios.services';

@Module({
  imports: [],
  controllers: [UsuariosController],
  providers: [UsuariosService],
  exports: [UsuariosService], 
})
export class UsuariosModule {}